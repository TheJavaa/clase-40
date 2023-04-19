# Clase 40 - Arquitectura del servidor

![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)
![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white)
![GitHub](https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white)

## Mejorar la arquitectura de nuestra API

### Consignas:

- [x] Modificar la capa de persistencia incorporando los conceptos de Factory, DAO y DTO.
> Se incorporaron los conceptos de [DAO](Clase_40/DAO), [DTO](Clase_40/DTO) y [Factory](Clase_40/factory).
- [x] Los DAOs deben presentar la misma interfaz hacia la lógica de negocio de nuestro servidor.
> Los DAO fueron actualizados, por ejemplo con [Producto](Clase_40/DAO/DatabaseProductoDao.js) bajo el concepto de persistencia.
- [x] El DAO seleccionado (por un parámetro en línea de comandos como lo hicimos anteriormente) será devuelto por una Factory para que la capa de negocio opere con el.
> Se implementó la conexión con [Factory](Clase_40/database/factory.js).
- [x] Cada uno de estos casos de persistencia, deberán ser implementados usando el patrón singleton que impida crear nuevas instancias de estos mecanismos de acceso a los datos.
> Implementado de acuerdo al principio de SingletonClass():
```
static getInstance(){
    if(!instance){
      instance = new DatabaseProductoDao()
    }
    return instance
}
```
- [x] Comprobar que si llamo a la factory dos veces, con una misma opción elegida, devuelva la misma instancia.
> Confirmado.
- [x] Implementar el patrón Repository para la persistencia de productos y  mensajes.
> Implementado [acá](Clase_40/repository).
<br>
:bulb: **Desarrollador:** Maximiliano Filipuzzi