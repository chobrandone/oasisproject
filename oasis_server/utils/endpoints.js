module.exports = {
    getPosts:"/view",
    getPostById:"/:id",
    publishedPost:"/published",
    createpost:"/create",
    deletePost:"/delete/:id",
    editPost:"/edit/:id",
    deleteAll:"/deleteAll",

    /**
     * @Subscribrs endpoints
     * //Solv Tech//
     */
    getsubs:"/view",
    getOneSub:"/:id",
    createSubs:"/create",
    deleteOneSubs:"/delete",
    deleteAllSubs:"/deleteAll",

    /**
     * @Contact endpoints
     * //Solv Tech//
     */
     getcontacts:"/view",
     getOnecontact:"/:id",
     createcontact:"/create",
     deleteOnecontact:"/delete",
     deleteAllcontacts:"/deleteAll",

     /**
     * @aboutUs endpoints
     * //Solv Tech//
     */
      getaboutUs:"/view",
      getOneaboutUs:"/:id",
      createaboutUs:"/create",
      editaboutUs:"/edit/:id",
      deleteOneaboutUs:"/delete",
      deleteAllaboutUs:"/deleteAll",

      /**
     * @service endpoints
     * //Solv Tech//
     */
       getservice:"/view",
       getOneservice:"/:id",
       createservice:"/create",
       editservice:"/edit/:id",
       deleteOneservice:"/delete",
       deleteAllservice:"/deleteAll",
};