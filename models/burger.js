//refer to post.js model - remove orm 
module.exports = function(sequelize, DataTypes) {
	var Burger = sequelize.define("Burger", {
	  burger_name: {
		  type: DataTypes.STRING,
		  allowNull: false
	  },
	  devoured: {
		  type: DataTypes.BOOLEAN,
		  allowNull: false,
		  defaultValue: false
    }
	});

    // //to associate a customer with a Burger as we did on the post-author-joins exercise
    // Burger.associate = function(models) {
    //   // We're saying that a Burger should belong to a Customer
    //   // A Burger can't be created without an Customer due to the foreign key constraint
    //   Burger.belongsTo(models.Customer, {
    //     foreignKey: {
    //       allowNull: false
    //     }
    //   });
    // };

	return Burger;
  };



// // Import the ORM to create functions that will interact with the database.
// var orm = require("../config/orm.js");

// var burger = {
//   selectAll: function(cb) {
//     orm.selectAll("burgers", function(res) {
//       cb(res);
//     });
//   },
//   // The variables cols and vals are arrays.
//   insertOne: function(cols, vals, cb) {
//     orm.insertOne("burgers", cols, vals, function(res) {
//       cb(res);
//     });
//   },
//   updateOne: function(objColVals, condition, cb) {
//     orm.updateOne("burgers", objColVals, condition, function(res) {
//       cb(res);
//     });
//   },
//   // delete: function(condition, cb) {
//   //   orm.delete("burgers", condition, function(res) {
//   //     cb(res);
//   //   });
//   // }
// };

// // Export the database functions for the controller (burgers_controller.js).
// module.exports = burger;
