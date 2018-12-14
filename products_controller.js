module.exports = {
    create: ( req, res, next ) => {
      const dbInstance = req.app.get('db');
      const { name, description, price, image_url } = req.body;

      dbInstance.delete_product([ name, description, price, image_url ])
      .then( () => res.sendStatus(200) )
      .catch( err => {
      res.status(500).send({errorMessage: "Oops! Something went wrong. Our engineers have been informed!"});
      console.log(err)
      } );
    },
  
    getOne: ( req, res, next ) => {
      const dbInstance = req.app.get('db');
      const { params } = req;

      dbInstance.delete_product( params.id )
      .then( () => res.sendStatus(200).send ( products ) )
      .catch( err => {
      res.status(500).send({errorMessage: "Oops! Something went wrong. Our engineers have been informed!"});
      console.log(err)
      } );
    },
  
    getAll: ( req, res, next ) => {
      const dbInstance = req.app.get('db');
      
      dbInstance.delete_product()
      .then( () => res.sendStatus(200).send ( products ) )
      .catch( err => {
      res.status(500).send({errorMessage: "Oops! Something went wrong. Our engineers have been informed!"});
      console.log(err)
      } );
    },
  
    update: ( req, res, next ) => {
      const dbInstance = req.app.get('db');
      const { params, query } = req;

      dbInstance.delete_product([ params.id, query.desc ])
      .then( () => res.sendStatus(200) )
      .catch( err => {
      res.status(500).send({errorMessage: "Oops! Something went wrong. Our engineers have been informed!"});
      console.log(err)
      } );
    },
  
    delete: ( req, res, next ) => {
      const dbInstance = req.app.get('db');
      const { params } = req;

      dbInstance.delete_product( params.id )
      .then( () => res.sendStatus(200) )
      .catch( err => {
      res.status(500).send({errorMessage: "Oops! Something went wrong. Our engineers have been informed!"});
      console.log(err)
      } );
    }
  };