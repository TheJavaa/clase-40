import persistenciaMemory from "./productosMemory.js";
import persistenciaMongo from "./productos.js";
class FactoryProductoModel {
	static set(opcion) {
		console.log("**** PERSISTENCIA SELECCIONADA **** [" + opcion + "]");
		switch (opcion) {
			case "Mem":
				return new persistenciaMemory();
			case "Mongo":
				return new persistenciaMongo();
		}
	}
}

const opcion = process.argv[4] || "Mem";

export default FactoryProductoModel.set(opcion);
