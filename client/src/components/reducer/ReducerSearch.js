function ReducerSearch({searchHandle, search}){

  return(
    <>
      <input style={{ border: "2px solid blue", padding: 5 , borderRadius: 5 }}
        type="text" placeholder="Todolarda Ara"
        onChange={searchHandle}
        value={search}
        />
    </>
  )
}

export default ReducerSearch