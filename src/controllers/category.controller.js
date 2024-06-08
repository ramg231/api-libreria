import Category from "../models/categoria.js";

export const getCategorias = async (req,res) => {
    try {
        const categories = await Category.find();
        res.status(200).json(categories);
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
    };
    
    
    export const crearCategoria = async (req, res) => {
        const { nombrecat } = req.body;
      
        try {
          // Buscar la última categoría creada para generar el nuevo código
          const lastCategory = await Category.findOne().sort({ codcategoria: -1 });
      
          let newCodcategoria = '00001'; // Valor inicial si no hay categorías
      
          if (lastCategory) {
            // Si hay categorías, generar el siguiente código
            const lastCod = parseInt(lastCategory.codcategoria.substr(-5)); // Obtener el último número
            newCodcategoria = ('00000' + (lastCod + 1)).slice(-5); // Generar el nuevo código
          }
      
          const newCategory = new Category({ nombrecat, codcategoria: newCodcategoria });
          await newCategory.save();
          res.status(201).json(newCategory);
        } catch (error) {
          res.status(500).json({ error: error.message });
        }
      };

    