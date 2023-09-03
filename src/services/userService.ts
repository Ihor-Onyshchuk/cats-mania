import type { User } from '@/types/User'

export function createUser(user: User): Promise<Omit<User, 'password'>> {
  const newUser: User = { ...user }

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (localStorage.users) {
        try {
          const users: User[] = JSON.parse(localStorage.users)
          const updatedUsers = [newUser, ...users]

          localStorage.setItem('users', JSON.stringify(updatedUsers))

          return resolve(newUser)
        } catch (error: Error | any) {
          return reject(error?.message || 'Parsing data error!')
        }
      }

      localStorage.setItem('users', JSON.stringify([{ ...newUser }]))

      const { password, ...user } = newUser

      resolve(user)
    }, 1500)
  })
}

export function loginUser(userCreds: Omit<User, 'id'>): Promise<Omit<User, 'password'> | null> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (localStorage.users) {
        try {
          const users: User[] = JSON.parse(localStorage.users)
          const findedUser: User | undefined = users.find(
            ({ username, password }) =>
              username === userCreds.username && password === userCreds.password
          )

          if (findedUser?.id) {
            const { password, ...user } = findedUser
            return resolve({ ...user })
          }

          return resolve(null)
        } catch (error: Error | any) {
          return reject(error?.message || 'Parsing data error!')
        }
      }

      resolve(null)
    }, 1500)
  })
}

export function logoutUser(userId: string): Promise<{ id: string }> {
  return new Promise((resolve) => {
    setTimeout(() => {
      if (localStorage.user) {
        localStorage.removeItem('user')
      }
      resolve({ id: userId })
    }, 1500)
  })
}
