module.exports = (sequelize, DataType) => {
  const Cook = sequelize.define('Cook', {
    title: DataType.STRING,
    material: DataType.TEXT,
    content: DataType.TEXT,
    cookImageUrl: DataType.STRING,
    youtubeId: DataType.STRING
  })
  return Cook
}
