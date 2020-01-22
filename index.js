function getName(user) {
  if (user.isAdmin) {
    var name = 'Admin : ' + user.name;
    return name;
  }
  //console.log(name)
  return user.name;
}
const res = getName({name: 'Pierre', isAdmin:false})
//console.log(res)


 const user  = { name : 'Angular', version : 9};
 const { name : finalName, version : angularVersion } = user 
 console.log(finalName)
  console.log(angularVersion)

 const user  = { name : 'Angular', version : 9};
 const { name , version } = user 
  console.log(name)
  console.log(version)