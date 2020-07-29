/* jshint indent: 1 */

module.exports = function (sequelize, DataTypes) {
	return sequelize.define('aayush_users', {
		id: {
			type: DataTypes.INTEGER(100),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		full_name: {
			type: DataTypes.STRING(50),
			allowNull: false
		},
		username: {
			type: DataTypes.STRING(400),
			allowNull: true
		},
		lastname: {
			type: DataTypes.STRING(300),
			allowNull: true
		},
		password: {
			type: DataTypes.STRING(400),
			allowNull: false
		},
		email: {
			type: DataTypes.STRING(400),
			allowNull: false
		},
		age: {
			type: DataTypes.STRING(20),
			allowNull: true
		},
		address: {
			type: DataTypes.TEXT,
			allowNull: true
		},
		state: {
			type: DataTypes.STRING(400),
			allowNull: true
		},
		country: {
			type: DataTypes.STRING(400),
			allowNull: true
		},
		pincode: {
			type: DataTypes.STRING(400),
			allowNull: true
		},
		phoneno: {
			type: DataTypes.STRING(400),
			allowNull: true
		},
		childhood: {
			type: DataTypes.STRING(400),
			allowNull: true
		},
		interest: {
			type: DataTypes.STRING(400),
			allowNull: true
		},
		designation: {
			type: DataTypes.STRING(400),
			allowNull: true
		},
		description: {
			type: DataTypes.TEXT,
			allowNull: true
		},
		about_you: {
			type: DataTypes.TEXT,
			allowNull: true
		},
		date: {
			type: DataTypes.DATE,
			allowNull: false,
			defaultValue: sequelize.fn('current_timestamp')
		},
		register_date: {
			type: DataTypes.STRING(400),
			allowNull: true
		},
		ip: {
			type: DataTypes.STRING(400),
			allowNull: true
		},
		status: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		alert_noti: {
			type: DataTypes.INTEGER(1),
			allowNull: true
		},
		profile_img: {
			type: DataTypes.STRING(50),
			allowNull: true
		},
		mobile_verified: {
			type: DataTypes.STRING(1),
			allowNull: false,
			defaultValue: '0'
		},
		user_active: {
			type: DataTypes.INTEGER(1),
			allowNull: false,
			defaultValue: '0'
		},
		mobile_otp: {
			type: DataTypes.INTEGER(6),
			allowNull: false
		},
		resetPasswordExpires: {
			type: DataTypes.DATE,
			allowNull: false,
			defaultValue: sequelize.fn('current_timestamp')
		},
		resetPasswordToken: {
			type: DataTypes.STRING(50),
			allowNull: true
		}
	}, {
		tableName: 'aayush_users',
		timestamps: false
	});
};
