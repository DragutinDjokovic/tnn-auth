exports.handler = async(event, context) => {
    const guides = [
        { title:'jedan', author:'mario'},
        { title:'dva', author:'zelda'},
        { title:'tri', author:'luigi'},
    ]

    if( context.clientContext.user){
        return {
           statusCode: 200,
           body: JSON.stringify(guides)
        }
    }

        return {
            statusCode: 401,
            body: JSON.stringify({mssg: 'ah,ah,ah - you must be loged in to see this'})
        }
}