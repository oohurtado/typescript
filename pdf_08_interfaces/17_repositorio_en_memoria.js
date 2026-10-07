// Define UserRepository y una implementacion InMemoryUserRepository.
// Requisitos
// - Debe listar, buscar, agregar y actualizar usuarios.
// - Maneja ids inexistentes.
// - Mantiene los datos en un array privado.
// Ejemplo de ejecucion
// Usuario actualizado: Ana
// Objetivo
// Practicar interfaces como abstracciones.
// Pista
// El codigo consumidor puede depender del contrato en lugar de la implementacion
class UserServiceImpl {
    users = [];
    getAll() {
        return this.users;
    }
    getById(id) {
        return this.users.find(p => p.id == id);
    }
    create(id, name) {
        let found = this.users.find(p => p.id == id);
        if (found !== undefined) {
            return false;
        }
        this.users.push({ id, name });
        return true;
    }
    update(id, name) {
        let found = this.users.find(p => p.id == id);
        if (found === undefined) {
            return false;
        }
        found.name = name;
        return true;
    }
    delete(id) {
        let index = this.users.findIndex(p => p.id == id);
        if (index === -1) {
            return false;
        }
        this.users.splice(index, 1);
        return true;
    }
}
let userService = new UserServiceImpl();
userService.create(1, 'oscar');
userService.create(1, 'osbaldo');
userService.create(2, 'nahara');
let allUsers = userService.getAll();
console.log(allUsers);
let oneUser = userService.getById(1);
console.log(oneUser);
userService.update(2, 'nay');
let updatedOne = userService.getById(2);
console.log(updatedOne);
export {};
