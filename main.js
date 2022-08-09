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

    BuyBook : function(user,book,sucursal){
        array = [{user,book,sucursal}];
        return (array);          
    },



    Register : function(Name, password){
        array = [{Name : Name},{password : password}]
        return (array[1]);
    },

    Inspect : function(idUSTyp,sucursal){
        if(idUSTyp >= 3){
            return ("SELECT Title, Author, Name,sucursal FROM bibliotecas.sales LEFT JOIN books ON books.id = sales.IdBook LEFT JOIN users ON users.id = sales.IdBook LEFT JOIN sucursal ON sucursal.id = sales.IdSucursal where sucursal like '"+sucursal+"%';");
        }
        else{
            return "Fail";
        }
    },

    UsersUp : function(iduser,idUSTyp){
        if(idUSTyp >= 4){
            return ("UPDATE `bibliotecas`.`users` SET `⁯idusertype` = '2' WHERE (`id` = '"+iduser+"');");
        }
    },

    Consult : function(Search){
        return ("SELECT * FROM bibliotecas.books where Title like '"+Search+"%' or Author like '"+Search+"%' or Gender like '"+Search+"%';");
    },

    Show : function(idUSTyp){
        if(idUSTyp >= 1){
            return ("SELECT * FROM bibliotecas.books;");
        }
    },


    Sucursales : function(city,idUSTyp){
        if(idUSTyp >= 4){
            return ("INSERT INTO `bibliotecas`.`sucursal` (`sucursal`) VALUES ('"+city+"');");
        }
    },

    DeleSucur : function(city,idUSTyp){
        if(idUSTyp >=4){
            return ("DELETE FROM `bibliotecas`.`sucursal` WHERE (`sucursal` = '"+city+"');");
        }
    },

    ConsultS : function(){
        return ("SELECT * FROM bibliotecas.sucursal;");
    },

    UpdateS : function(IdUser,IdBook,Idsucursal,IdSell,idUSTyp){
        if(idUSTyp >= 4){
        return ("UPDATE `bibliotecas`.`sales` SET `IdUser` = '"+IdUser+"', `IdBook` = '"+IdBook+"', `IdSucursal` = '"+Idsucursal+"' WHERE (`id` = '"+IdSell+"');");
        }
    }
/*
    subtraction: function(number1, number2){
        return number1 - number2;
    },

    arrayOfNumbers : function(){
        return [0,1,2,3,4,5];
    }*/
};