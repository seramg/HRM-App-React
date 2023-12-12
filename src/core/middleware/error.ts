const error = (store: any)=> (next: (arg0: any) => void) =>(action: { type: string; payload: { error: any; }; })=>{
    if(action.type ==="SHOW_ERROR"){
        console.log(action.payload.error)
    }
    else{
        next(action);
    }
}

export default error;