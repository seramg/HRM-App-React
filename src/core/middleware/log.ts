const log = (store: any)=> (next: any)=> (action: any) => {
    // next: help us run the next middleware. if only 1 middleware, next pass the action to the rootreducer. 
    console.log(action);
    console.log(next);
    console.log(store)
}

export default log;