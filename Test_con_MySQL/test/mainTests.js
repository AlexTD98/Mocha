const assert = require('chai').assert;
const { arrayOfNumbers, Show } = require('../main');
const main = require('../main');

const DB = main.DBConnection();
const Add = main.AddBook('It','Stephen King','Novela',2,2);
const Delete = main.DeleteBook('Crepúsculo',2);
const Update = main.UpdateBook('El Alquimista','Poulo Coelho','Fantacia','1',2);
const Buy = main.BuyBook(1,1,1);
const Register = main.Register('German','German123');
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
            DB.connect( (err) =>{
                if(err) throw err
            });
        });
    });

    describe('Contro de Libros' , function(){

        it('Add Books', function(){
            DB.query(Add,(err)=>{
                if(err) throw err
            });
        });

        it('Delete Books', function(){
            DB.query(Delete,(err)=>{
                if(err) throw err
            });
        });

        it('Update Books', function(){
            DB.query(Update,(err)=>{
                if(err) throw err
            });
        });

        it('Buy Books', function(){
            DB.query(Buy,(err)=>{
                if(err) throw err
            });
        });

    });


    describe('Show all Books', function(){

        it('DB Consult',function(){
            DB.query(showall, (err, rows) =>{
                if(err) throw err
                console.log(rows)
            });
        });
    });

    describe('Tipos de Usuarios', function(){

        it('Insert New User', function(){
            DB.query(Register,(err)=>{
                if(err) throw err
            });
        });


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
    
});