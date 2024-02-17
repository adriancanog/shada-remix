import { PrismaClient } from "@prisma/client";
const db = new PrismaClient();

async function seed() {
    await Promise.all(
        getCategies().map((category) => {
            return db.category.create({ data: category });
        })
    );
}

seed();

function getCategies() {
    return [
        {
            name: "Agua y Gas",
            description: "Artículos de Agua y Gas"
        },
        {
            name: "Cabezales y Accesorios",
            description: "Artículos Cabezales y Accesorio"
        },
        {
            name: "Accesorios de Bronce",
            description: "Artículos de Bronce"
        },
        {
            name: "Repuestos Artefactos de Gas",
            description: "Gas"
        },
        {
            name: "Perillas",
            description: "perillas"
        },
        {
            name: "Diafragmas de Calefón",
            description: "Calefón"
        },
        {
            name: "Hogar y Camping",
            description: "Hogar y Camping"
        },
        {
            name: "Artículos de Riego",
            description:"riego"
        },
    ];
}
