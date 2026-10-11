/// <reference lib="es2018" />
export {}

// 1. RETURN DIRECTO DENTRO DE ASYNC
// La función devuelve un valor y async resuelve la Promise automáticamente.

async function ejemplo1(): Promise<number> {
    return 10;
}

async function consumir1(): Promise<void> {
    const resultado: number = await ejemplo1();
    console.log('Ejemplo 1:', resultado);
}


// 2. PROMISE.RESOLVE()
// Devuelve explícitamente una Promise resuelta.

function ejemplo2(): Promise<number> {
    return Promise.resolve(20);
}

async function consumir2(): Promise<void> {
    const resultado: number = await ejemplo2();
    console.log('Ejemplo 2:', resultado);
}


// 3. RESOLVE() DENTRO DE NEW PROMISE()
// Resuelve manualmente la Promise.

function ejemplo3(): Promise<number> {
    return new Promise<number>((resolve, reject) => {
        resolve(30);
    });
}

async function consumir3(): Promise<void> {
    const resultado: number = await ejemplo3();
    console.log('Ejemplo 3:', resultado);
}


// 4. PROMISE.REJECT()
// Devuelve explícitamente una Promise rechazada.

function ejemplo4(): Promise<number> {
    return Promise.reject(new Error('Operacion fallida 4'));
}

async function consumir4(): Promise<void> {
    try {
        const resultado: number = await ejemplo4();
        console.log('Ejemplo 4:', resultado);
    } catch (error) {
        console.log('Ejemplo 4 - Error:', (error as Error).message);
    }
}


// 5. REJECT() DENTRO DE NEW PROMISE()
// Rechaza manualmente la Promise.

function ejemplo5(): Promise<number> {
    return new Promise<number>((resolve, reject) => {
        reject(new Error('Operacion fallida 5'));
    });
}

async function consumir5(): Promise<void> {
    try {
        const resultado: number = await ejemplo5();
        console.log('Ejemplo 5:', resultado);
    } catch (error) {
        console.log('Ejemplo 5 - Error:', (error as Error).message);
    }
}


// 6. THROW DENTRO DE ASYNC
// Lanza un error y la Promise se rechaza automáticamente.

async function ejemplo6(): Promise<number> {
    throw new Error('Operacion fallida 6');
}

async function consumir6(): Promise<void> {
    try {
        const resultado: number = await ejemplo6();
        console.log('Ejemplo 6:', resultado);
    } catch (error) {
        console.log('Ejemplo 6 - Error:', (error as Error).message);
    }
}


// EJECUTAR TODOS LOS EJEMPLOS

async function main(): Promise<void> {
    await consumir1();
    await consumir2();
    await consumir3();
    await consumir4();
    await consumir5();
    await consumir6();
}

main();