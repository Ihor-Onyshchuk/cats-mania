<script setup lang="ts">
import { computed, ref } from 'vue'
import InputText from 'primevue/inputtext'
import Dropdown from 'primevue/dropdown'
import FileUpload, { FileUploadUploadEvent } from 'primevue/fileupload'
import InputNumber from 'primevue/inputnumber'
import Button from 'primevue/button'
import Calendar from 'primevue/calendar'

import { useCatsStore } from '../store/catsStore'
import { Cat, CatStatus, FurType } from '../types/Cat'
import { generateUniqueId } from '../utils'
import { useUserStore } from '../store/userStore'

type EatenBirdsItem = { date: Date | string; count: number }
type ActivitiesItem = {
  date: Date | string
  activityType: CatStatus | string
  minutesActive: number
}

const activitiesItem: ActivitiesItem = {
  date: '',
  activityType: '',
  minutesActive: 0
}

const eatenBirdsItem: EatenBirdsItem = {
  date: '',
  count: 0
}

const defaultCatValues: Omit<Cat, 'id' | 'ownerId'> = {
  name: '',
  color: '',
  breed: '',
  furType: 'Short Hair',
  status: 'Sleeping',
  photo: '',
  activities: [],
  eatenBirds: []
}

const furTypeOptions: FurType[] = [
  'Short Hair',
  'Long Hair',
  'Semi-Long Hair',
  'Curly Hair',
  'Hairless'
]
const catStatusOptions: CatStatus[] = ['Awake', 'Sleeping', 'Eating', 'Playing', 'Sunbathing']

const catsStore = useCatsStore()
const userStore = useUserStore()

const newCat = ref<Omit<Cat, 'id' | 'ownerId'>>(structuredClone(defaultCatValues))
const fileInputRef = ref<FileUploadUploadEvent | null>(null)

const isFormValid = computed<boolean>(() => {
  const isValidActivitiesItems = validateActivityItem('activities')
  const isValidEatenBirds = validateActivityItem('eatenBirds')
  const isValidRequiredFormFields =
    Boolean(newCat.value.name.trim()) &&
    Boolean(newCat.value.color.trim()) &&
    Boolean(newCat.value.breed.trim())

  return isValidEatenBirds && isValidActivitiesItems && isValidRequiredFormFields
})

const addCat = () => {
  if (isFormValid.value) {
    const catWithId: Cat = {
      ...newCat.value,
      id: generateUniqueId(),
      ownerId: userStore.user.id
    }
    catsStore.addCat(catWithId)
    resetForm()
  }
}

const addActivityItem = (key: string, item: EatenBirdsItem | ActivitiesItem) => {
  newCat.value[key].push(structuredClone(item))
}

const validateActivityItem = (key: string) => {
  const items: Array<ActivitiesItem | EatenBirdsItem> = newCat.value[key]
  const lastItem = items[items.length - 1]

  if (!items.length) {
    return true
  }

  if (key === 'activities' && 'activityType' in lastItem) {
    const activityItem = lastItem as ActivitiesItem
    return activityItem.date && activityItem.activityType && activityItem.minutesActive > 0
  } else if (key === 'eatenBirds' && 'count' in lastItem) {
    const eatenBirdsItem = lastItem as EatenBirdsItem
    return eatenBirdsItem.date && eatenBirdsItem.count > 0
  }

  return false
}

const removeActivityItem = (key: string, index: number) => {
  newCat.value[key].splice(index, 1)
}

const resetForm = () => {
  newCat.value = structuredClone(defaultCatValues)
  if (fileInputRef.value) {
    fileInputRef.value.files = null
  }
}

const handlePhotoUpload = (event) => {
  const file = event.files[0]
  if (file) {
    const reader = new FileReader()
    reader.onload = () => {
      newCat.value.photo = `${reader.result}`
    }
    reader.readAsDataURL(file)
  }
}
</script>

<template>
  <div class="add-cat-container">
    <h2>Add a New Cat</h2>
    <form @submit.prevent="addCat" class="form">
      <div class="form-group">
        <label for="name">Name:</label>
        <InputText id="name" v-model="newCat.name" required />
      </div>

      <div class="form-group">
        <label for="color">Color:</label>
        <InputText id="color" v-model="newCat.color" required />
      </div>

      <div class="form-group">
        <label for="breed">Breed:</label>
        <InputText id="breed" v-model="newCat.breed" required />
      </div>

      <div class="form-group">
        <label for="furType">Fur Type:</label>
        <Dropdown id="furType" v-model="newCat.furType" :options="furTypeOptions" />
      </div>

      <div class="form-group">
        <label for="status">Status:</label>
        <Dropdown id="status" v-model="newCat.status" :options="catStatusOptions" />
      </div>

      <div class="form-group">
        <img :src="previewImg" />
        <label for="photo">Photo:</label>
        <FileUpload
          id="photo"
          ref="fileInputRef"
          mode="basic"
          v-model="newCat.photo"
          accept="image/*"
          :maxFileSize="1000000"
          @select="handlePhotoUpload"
        />
      </div>

      <div class="form-group activities">
        <h3>Activities</h3>
        <div v-for="(activity, index) in newCat.activities" :key="index" class="activity">
          <Calendar v-model="activity.date" timeOnly class="activity-time" placeholder="Time" />
          <InputNumber
            v-model="activity.minutesActive"
            :min="0"
            :max="60"
            class="activity-active-minutes"
            placeholder="Minutes active"
          />
          <Dropdown
            v-model="activity.activityType"
            :options="catStatusOptions"
            class="activity-type"
            placeholder="Type"
          />
          <Button
            @click="removeActivityItem('activities', index)"
            icon="pi pi-trash"
            class="remove-activity-button"
          ></Button>
        </div>
        <Button
          @click="addActivityItem('activities', { ...activitiesItem })"
          label="Add Activity"
          class="add-activity-button"
          :disabled="!validateActivityItem('activities')"
        />
      </div>

      <div class="form-group eaten-birds">
        <h3>Birds Eaten</h3>
        <div v-for="(eatenBird, index) in newCat.eatenBirds" :key="index" class="eaten-bird">
          <Calendar v-model="eatenBird.date" timeOnly class="eaten-birds-time" placeholder="Time" />
          <InputNumber
            v-model="eatenBird.count"
            :min="0"
            class="eaten-birds-count"
            placeholder="Birds amount"
          />
          <Button
            @click="removeActivityItem('eatenBirds', index)"
            class="remove-eaten-birds-button"
            icon="pi pi-trash"
          />
        </div>
        <Button
          @click="addActivityItem('eatenBirds', { ...eatenBirdsItem })"
          label="Add Eaten birds"
          class="add-eaten-birds-button"
          :disabled="!validateActivityItem('eatenBirds')"
        />
      </div>

      <Button
        type="submit"
        label="Add Cat"
        class="p-button-success submit-button"
        :disabled="!isFormValid"
      />
    </form>
  </div>
</template>

<style scoped>
.add-cat-container {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}

.form {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.form-group {
  display: flex;
  flex-direction: column;
}

.activities,
.eaten-birds {
  margin-top: 10px;
}

.activity,
.eaten-bird {
  display: flex;
  flex-direction: row;
  gap: 10px;
  margin-bottom: 10px;
}

.activity-time,
.eaten-birds-time {
  flex: 1;
}

.activity-type,
.eaten-birds-count {
  flex: 2;
}

.add-activity-button,
.add-eaten-birds-button {
  align-self: flex-start;
}

.submit-button {
  width: 200px;
}

@media (max-width: 600px) {
  .form-group {
    width: 100%;
  }

  .submit-button {
    width: 100%;
  }

  .activity,
  .eaten-bird {
    flex-wrap: wrap;
  }
}
</style>
