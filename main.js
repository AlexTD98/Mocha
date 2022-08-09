const mongoose = require('mongoose');
const parseId = (id) =>{
    return mongoose.Types.ObjectId(id)
}
const parseIdUp = (id) =>{
    return mongoose.Types.ObjectId(id)
}
let schema = mongoose.Schema({
    Titulo:{type: String},
    Autor:{type: String},
    Genero:{type: String},
    Sucursal:{type: String}
}); 
let Book = mongoose.model('Libros',schema);
module.exports = {

    DBConnection : function(){
        return 'mongodb://localhost/Biblioteca';
    }, 
    AddBook : function(title, author,gender,sucursal,idUSTyp){
        if (idUSTyp >= 2){
            let newBook = new Book({
                "Titulo": title,
                "Autor": author,
                "Genero": gender,
                "Sucursal":sucursal
            });
        return (newBook);
        }
        else{
            return "Fail";
        }
    },

    DeleteBook : function(id,idUSTyp){
        if(idUSTyp >= 2){
            let delBook = new Book({
                _id:parseId(id)
            });
        return (delBook);
        }
        else{
            return "Fail";
        }
    },

    UpdateBook : function(title_old,title_new,gender_old,gender_new,branchoffice_old,branchoffice_new, idUSTyp){
        OldBook = [{
            Titulo: title_old,
            Genero: gender_old,
            Sucursal: branchoffice_old
        }];
        NewBook = [{
            Titulo: title_new,
            Genero: gender_new,
            Sucursal: branchoffice_new
        }];
        Union = OldBook.concat(NewBook);
        return (Union);
        
    },

    BuyBook : function(book,sucursal){
        sealedObject = Object.seal({titulo : book},{sucursal : sucursal});
        return (sealedObject);          
    },



    Register : function(Name, password){
        array = [{Name},{password}];
        return (array[1]);
    },

    Inspect : function(){
        sales = [{titulo :'El alquimista', sucursal : 'Tijuana', comprador : 'Alejandro'},
        {titulo :'IT', sucursal : 'Monterrey', comprador : 'Karen'},
        {titulo :'La teoria del todo', sucursal : 'Colima', comprador : 'Carlos'}];
        return(sales);
    },

    UsersUp : function(){
        Consult = [{User : 'Alejandro'},{User: 'Carlos'}, {User:'Karen'}];
        return(Consult);
    },

    Consult : function(){
        Consult = [{titulo : 'El alquimista'},{autor : 'Paulo Coelho'},{genero : 'Novela'},
                    {titulo : 'La teoria del todo'}, {autor : 'Stephen Hawking '}, {genero : 'Ciencia'}];
        return (Consult);
    },

    Show : function(idUSTyp){
        if(idUSTyp >= 1){
            return ("SELECT * FROM bibliotecas.books;");
        }
    },


    Sucursales : function(city){
        return(city);
    },


    ConsultS : function(){
        var sucursales = 'Tijuana|Monterrey|Colima|Ensenada'
        return (sucursales);
    }

   
};