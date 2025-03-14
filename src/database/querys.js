export const queries={

    getusers:"select* from usuario",
    adduser:"Insert into usuario values(@user,@pass,@name,@lname,@email,@photo,@cuenta)",
    getuserByid: "Select* from usuario where usuar=@id",
    deleteuser: "Delete from usuario where usuar=@id",
    //updateuser:"Update usuario set clave=@pass,nombre=@name,apellidos=@lname,correo=@email,foto=@photo where usuar=@user",
    updateuser:"Update usuario set usuar=@user,clave=@pass,nombre=@name,apellidos=@lname,correo=@email,foto=@photo where usuar=@id",

    getlinea:"SELECT * from Linea",
    getlineaByid: "Select* from Linea where numero=@Id",
    addlinea:"INSERT into Linea values(@number,@name,@desc,@img,@phone,@mail,@address,@canti,@colores,@lati,@lngi)",    
    deletelinea: "DELETE from Linea where numero=@id",
    updatelinea:"UPDATE Linea set numero=@number,name_emp=@name,desc_emp=@desc,img_emp=@img,tel_emp=@phone,email_emp=@mail,direc_emp=@address,cant_unidades=@canti,color_emp=@colores,ubic_lat=@lati,ubic_lng=@lngi where numero=@id",
    getlineaall:"SELECT numero,name_emp from Linea",

    getbuses:"select placa_ut, linea_ut from busTransporte",
    getbusesLinea: "Select placa_ut, estado_ut from busTransporte where linea_ut=@num",
    getbusByplaca: "Select* from busTransporte where placa_ut=@placa",
    addbus:"Insert into busTransporte values(@placa,@year,@categ,@marca,@estado,@propiet,@capac,@tipo,@lati,@lngi,@linea)",
    updatebus:"Update busTransporte set placa_ut=@placa,año_ut=@year,categ_ut=@categ,marca_ut=@marca,estado_ut=@estado,propietar_ut=@propiet,capac_ut=@capac,tipo_ut=@tipo where placa_ut=@id",
    deletebus: "Delete from busTransporte where placa_ut=@id",

    getlugar:"select* from Lugar",
    addlugar:"Insert into Lugar values(@nomb)",
    updatelugar:"UPDATE Lugar set nombre_lg=@name where lugarId=@id",
    dellugar: "Delete from Lugar where lugarId=@id",

    //getitiner:"SELECT* from Itinerario",
    getitinerlinea: "select itnerarioId,recorrido_it,orden_it,nombre_lg from Itinerario inner join Lugar on Lugar.lugarId=lugar_it where linea_it=@line order by orden_it asc",
    additiner:"Insert into Itinerario values(@reco,@orde,@linea,@lugar)",
    updateitiner:"Update Itinerario set recorrido_it=@ureco,orden_it=@uorde,linea_it=@ulinea,lugar_it=@ulugar where itnerarioId=@id",
    deleteitiner: "Delete from Itinerario where itnerarioId=@id",

    getparadas:"select * from Paradero",   
    getparadaUbic:"select nomb_pd, lat_cor, lng_cor from Ruta inner join Coordenada on Coordenada.coordId=coord inner join Paradero on Paradero.paraderId=parada_cor where linea=@lin and recorrido=@rec and paraderId!=1",
    addparada:"Insert into Paradero values(@nombpd)",
    delparada: "Delete from Paradero where paraderId=@id",
    updateparad:"UPDATE Paradero set nomb_pd=@nompd where paraderId=@id",
    
    //getruta:"SELECT * from Ruta",
    addruta:"INSERT into Ruta values(@numorden,@recorrid,@paradaes,@coordenada,@rlinea)",    
    delruta: "DELETE from Ruta where rutaId=@Id",
    updateruta:"UPDATE Ruta set orden=@numorden,coord=@coordenada where rutaId=@id",
    getrutaapp: "Select lat_cor,lng_cor from Ruta inner join Coordenada on Coordenada.coordId=coord where linea=@idlin and recorrido=@reco order by orden asc",
    
    getrutashow: "Select recorrido,lat_cor,lng_cor from Ruta inner join Coordenada on Coordenada.coordId=coord where linea=@idlin order by orden asc",
    getrutaedit:"select rutaId,orden,recorrido,esparada,coord,lat_cor,lng_cor from Ruta inner join Coordenada on Coordenada.coordId=coord where linea=@idlin and recorrido=@reco order by orden asc",
    getrutaadd:"select coordId from Ruta inner join Coordenada on Coordenada.coordId=coord where linea=@idlin and recorrido=@reco order by orden asc",
    
    getcoord:"select* from Coordenada",
    addcoord:"Insert into Coordenada values(@id,@lat,@lon,@parada)",   
    updatecoord:"UPDATE Coordenada set coordId=@idc, lat_cor=@lat, lng_cor=@lon, parada_cor=@parada where coordId=@id",
    delcoord: "Delete from Coordenada where coordId=@id",
    
    getzona:"select* from Zona",
    addzona:"Insert into Zona values(@name)",    
    delzona: "Delete from Zona where zonaId=@id",
    updatezona:"UPDATE Zona set nombre_zn=@name where zonaId=@id",

    getdestino:"select* from Destino",
    adddestino:"Insert into Destino values(@name,@zona,@parada)",   
    updatedestino:"UPDATE Destino set nombre_des=@name, zona_des=@zona, parada_des=@parada where destinoId=@id",
    deldestino: "Delete from Destino where destinoId=@id",
    getdestinoinner:"select nombre_des,nombre_zn,nomb_pd from Destino inner join Zona on Zona.zonaId=zona_des inner join Paradero on Paradero.paraderId=parada_des",
    //falta probar : getlineastodestin
    getlineastodestin:"select linea, recorrido from ruta inner join Coordenada on Coordenada.coordId=coord where parada_cor=@id",

    getpasaje:"select* from Pasaje",
    addpasaje:"Insert into Pasaje values(@tipo,@desc)",
    updatepasaje:"UPDATE Pasaje set tipo_pj=@tipo,descr_pj=@desc where pasajeId=@id",
    delpasaje: "Delete from Pasaje where pasajeId=@id",
  
    //gettars:"SELECT* from Tarifa",
    gettarlinea: "Select* from Tarifa where tlinea=@line",    
    gettaraap:"SELECT tipo_pj,descr_pj,costo from Tarifa  inner join Pasaje on Pasaje.pasajeId=tpasaje where tlinea=@id",
    addtar:"Insert into Tarifa values(@cost,@pasaj,@linea)",
    updatetar:"Update Tarifa set costo=@cost where tarifaId=@id",    
    deltar: "Delete from Tarifa where tarifaId=@id",

    getdia:"select* from DiaServicio",
    adddia:"Insert into DiaServicio values(@day)",    
    deletedia: "Delete from DiaServicio where diaId=@id",
    updatedia:"UPDATE DiaServicio set nombre_ds=@day where diaId=@id",
   
    gethorar:"SELECT* from Horario",
    gethorapp:"SELECT nombre_ds,HoraInicio,HoraFinal from Horario inner join DiaServicio on DiaServicio.diaId=hdia where hlinea=@id",
    addhorar:"Insert into Horario values(@inicio,@fin,@dia,@linea)",    
    updatehorar:"Update Horario set HoraInicio=@inicio, HoraFinal=@fin where nhoraId=@id",
    delhorar: "Delete from Horario where nhoraId=@id"
    
    
    
}