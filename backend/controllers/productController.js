

exports.getProducts = (req, res, next) => {
   res.status(200).json({
      success: true,
      message: 'This route shows all products in database.'
   })
}