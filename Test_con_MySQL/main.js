const mysql = require('mysql')
module.exports = {

    DBConnection : function(){
        const conection = mysql.createConnection({
            host : 'localhost',
            port : '3306',
            user : 'root',
            password : '',
            database : 'bibliotecas'
        });
        return conection;
    }, 

    AddBook : function(title, author,gender,idsucursal,idUSTyp){
        if (idUSTyp >= 2){
        return ("INSERT INTO `bibliotecas`.`books` (`Title`, `Author`,`Gender`, `Idsucursal` ) VALUES ('"+title+"', '"+author+"','"+gender+"', '"+idsucursal+"');");
        }
        else{
            return "Fail";
        }
    },

    DeleteBook : function(title,idUSTyp){
        if(idUSTyp >= 2){
        return ("DELETE FROM `bibliotecas`.`books` WHERE (`Title` = '"+title+"');");
        }
        else{
            return "Fail";
        }
    },

    UpdateBook : function(title,author,gender,id,idUSTyp){
        if(idUSTyp >= 2){
        return ("UPDATE `bibliotecas`.`books` SET `Title` = '"+title+"', `Author` = '"+author+"', `Gender` = '"+gender+"' WHERE (`id` = '"+id+"');");
        }
        else {
            return "Fail";
        }
    },

    BuyBook : function(iduser,idbook,idsucursal){
        return ("INSERT INTO `bibliotecas`.`sales` (`IdUser`,`IdBook`,`IdSucursal`) VALUES ('"+iduser+"','"+idbook+"','"+idsucursal+"');");
    },



    Register : function(Name, password){
        return ("INSERT INTO `bibliotecas`.`users` (`Name`, `password`) VALUES ('"+Name+"', '"+password+"');");
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