// Define IUserService con getAll, getById, create y delete.
// Requisitos
// - Usa User como modelo.
// - Crea una clase en memoria que implemente la interface.
// - No uses any.
// Ejemplo de ejecucion
// Usuarios: 3
// Usuario eliminado
// Objetivo
// Modelar contratos de servicios.
// Pista
// Primero define que debe hacer el servicio y luego implementalo

export {}

interface User {
    id:number
    name:string
}

interface IUserServie {
    getAll(): User[]
    getById(id:number) : User | undefined
    create(id:number, name:string) : boolean
    delete(id:number) : boolean
}

class UserServiceImpl implements IUserServie {

    users:User[] = []

    getAll(): User[] {
        return this.users
    }
    
    getById(id: number): User | undefined {
        return this.users.find(p => p.id == id)
    }

    create(id: number, name: string): boolean {
        let found = this.users.find(p => p.id == id)
        if (found !== undefined) {
            return false;
        }

        this.users.push({id, name})
        return true;
    }

    delete(id: number): boolean {
        let index = this.users.findIndex(p => p.id == id)
        if (index === -1) {
            return false
        }
        
        this.users.splice(index,1)
        return true
    }

}

let userService = new UserServiceImpl()
userService.create(1,'oscar')
userService.create(1,'osbaldo')
userService.create(2,'nahara')

let allUsers = userService.getAll()
console.log(allUsers)

let oneUser = userService.getById(1)
console.log(oneUser)