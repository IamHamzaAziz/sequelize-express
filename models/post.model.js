import { DataTypes } from 'sequelize';
import sequelize from '../config/db.js';
import User from './user.model.js';

const Post = sequelize.define('Post', {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4, // Creates random UUID
    primaryKey: true
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false
  },
  content: {
    type: DataTypes.TEXT
  },
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
}, {
  tableName: 'posts',
  timestamps: true  // enables createdAt and updatedAt
});

// Relationships
Post.belongsTo(User, { foreignKey: 'userId', onDelete: 'CASCADE' });
User.hasMany(Post, { foreignKey: 'userId', onDelete: 'CASCADE' });

export default Post;
