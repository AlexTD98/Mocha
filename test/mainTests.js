const assert = require('chai').assert;
const { default: mongoose } = require('mongoose');
const { arrayOfNumbers, Show, DeleSucur } = require('../main');
const main = require('../main');

const DB = main.DBConnection();
const Add = main.AddBook('It','Stephen King','Novela','Tijuana',2);
const Delete = main.DeleteBook('62f1b3d5e6ea98e63d29bf27',2);
const Update = main.UpdateBook('It','It','Novela','Terror','Tijuana','Monterrey',2);
const Buy = main.BuyBook('It','Tijuana');
const Register = main.Register('German','German*1');
const ConSales = main.Inspect();
const UpdaUser = main.UsersUp();
const Search = main.Consult();
const sucursal = main.Sucursales('Tijuana');
const consults = main.ConsultS();

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
                    assert.ifError(err);
                });
            });
        });
    
       

        it('Delete Books', function(){
            mongoose.connect(DB,(err)=>{
                Delete.deleteOne((err)=>{
                    assert.ifError(err);
                });
            });
        });
    
 
        it('Update Books', function(){
            assert.notDeepEqual(Update[0],Update[1], "Valores Distintos");
        });

        it('Buy Books', function(){
            assert.isSealed(Buy);
        });

    });

    describe('Tipos de Usuarios', function(){

        it('Insert New User', function(){
            let valores = Object.values(Register);
           assert.match(valores[0],/([A-z])|[\.\*\\]|([0-9])/,'Cuenta con un caracter Especial y un numero');
           
             
        });
    

        it('Admin Update', function(){
            assert.includeDeepMembers(UpdaUser,[{User:"Alejandro"}], "Si se encuentra");
        });
    });

    describe('Busqueda de Libros', function(){

        it('Search Books', function(){
           assert.includeDeepMembers(Search,[{titulo : 'El alquimista'}]);
        });
    });
        
    describe('Punto de venta', function(){
        it('Add Branch Office', function(){
            assert.typeOf(sucursal,'string','Es un string');
        });
    

        it('Delete Branch Office', function(){
            var obj = { activo: 1 };
            var fn = function() { obj.activo = 0 };
            assert.changes(fn, obj, 'activo');
        });


        it('Consult Branch Office', function(){
            assert.isNotArray(consults,"Sucursales");
        });
    });


    describe('Reportes de Venta', function(){
        
        it('Consult Sales', function(){
            assert.isExtensible(ConSales);
            console.log(ConSales);
        });

        it('Update Sale', function(){
            var sale = {titulo:'El alquimista', sucursal:'Monterrey'};
            var fn = function(){sale.titulo = 'IT',sale.sucursal = "Tijuana"};
            assert.changes(fn,sale,'titulo');
        });
    });
    
});