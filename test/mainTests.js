const assert = require('chai').assert;
const { default: mongoose } = require('mongoose');
const { arrayOfNumbers, Show } = require('../main');
const main = require('../main');

const DB = main.DBConnection();
//const Add = main.AddBook('It','Stephen King','Novela','Tijuana',2);
//const Delete = main.DeleteBook('62f1b3d5e6ea98e63d29bf27',2);
const Update = main.UpdateBook('It','It','Novela','Terror','Tijuana','Monterrey',2);
const Buy = main.BuyBook('Alejandro','It','Tijuana');
const Register = main.Register('German','German123.');
const ConSales = main.Inspect(3,'Tijuana');
const UpdaUser = main.UsersUp(2,4);
const Search = main.Consult('el alquimista');
const showall = main.Show(2);
const sucursal = main.Sucursales('Guanajuato',4);
const deleteS = main.DeleSucur('Queretaro',4);
const consults = main.ConsultS();
const updatesell = main.UpdateS(2,1,3,1,4);
/*const subtractionResult = main.subtraction(4,2);
const arrayExample = main.arrayOfNumbers();*/

describe('Main Suite',function(){

    describe('Data Base Test',function(){

        it('DB Connection',function(){
            mongoose.connect(
                DB,
                {
                    keepAlive: true,
                    useNewUrlParser: true,
                    useUnifieldTopology: true
                }
            )
        });
    });

    describe('Contro de Libros' , function(){

        it('Add Books', function(){
            mongoose.connect(DB,(err)=>{
                Add.save((err)=>{
                    console.log(err);
                });
            });
        });
    
       

        it('Delete Books', function(){
            mongoose.connect(DB,(err)=>{
                Delete.deleteOne((err)=>{
                    console.log(err);
                });
            });
        });
    
 
        it('Update Books', function(){
            assert.notDeepEqual(Update[0],Update[1], "Valores Distintos");
        });

        it('Buy Books', function(){
            assert.isArray(Buy, "Datos De libro a comprar correctos");
        });

    });
/*

    describe('Show all Books', function(){

        it('DB Consult',function(){
            DB.query(showall, (err, rows) =>{
                if(err) throw err
                console.log(rows)
            });
        });
    });
*/
    describe('Tipos de Usuarios', function(){

        it('Insert New User', function(){
            let valores = Object.values(Register);
            assert.match(Register,/([A-z])+[\.\*\\]+([0-9])/,'Cuenta con un caracter Especial y un numero');
           // assert.match(Register[1]) 
             
        });
    });
/*
        it('Admin Update', function(){
            DB.query(UpdaUser,(err)=>{
                if(err) throw err
            });
        });
    });

    describe('Busqueda de Libros', function(){

        it('Search Books', function(){
            DB.query(Search,(err,rows)=>{
                if(err) throw err
                console.log(rows);
            });
        });
    });
        
    describe('Punto de venta', function(){
        it('Add Branch Office', function(){
            DB.query(sucursal, (err)=>{
                if(err) throw err
            });
        });

        it('Delete Branch Office', function(){
            DB.query(deleteS, (err)=>{
                if(err) throw err
            });
        });

        it('Consult Branch Office', function(){
            DB.query(consults, (err,rows)=>{
                if(err) throw err
                console.log(rows);
            });
        });
    });


    describe('Reportes de Venta', function(){
        it('Consult Sales', function(){
            DB.query(ConSales,(err,rows)=>{
                if(err) throw err
                console.log(rows)
            });
        });

        it('Update Sale', function(){
            DB.query(updatesell,(err)=>{
                if(err) throw err
            });
        });
    });
    */
});