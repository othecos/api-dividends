export class User{
    constructor(email,displayName,photoURL,providers){
        this.uid
        this.email = email;
        this.displayName = displayName;
        this.photoURL = photoURL;
        this.providers = providers || [];
    }
    setUid(uid){
        this.uid = uid
    }
    toJSON(){
        let obj = { }
        if(this.email) obj.email = this.email
        if(this.displayName) obj.displayName = this.displayName
        if(this.photoURL) obj.photoURL = this.photoURL
        if(this.providers) obj.providers = this.providers
        return obj
    }
    toDatabase(){
        let obj = { }
        if(this.email) obj.email = this.email
        if(this.displayName) obj.displayName = this.displayName
        if(this.photoURL) obj.photoURL = this.photoURL
        if(this.providers) obj.providers = this.providers.map((provider)=>{
            provider = JSON.parse(JSON.stringify(provider))
            return {
                ...provider
            }
        })
        return obj
    }
    setDataFromDB(DBdata){
        if(DBdata){
            if(DBdata.uid) this.uid = DBdata.uid
            if(DBdata.email) this.email = DBdata.email
            if(DBdata.displayName) this.displayName = DBdata.displayName
            if(DBdata.photoURL) this.photoURL = DBdata.photoURL
            if(DBdata.providers) this.providers = DBdata.providers
        }
    }
    setDataFromAuthUser(DBdata){
        if(DBdata){
            if(DBdata.uid) this.uid = DBdata.uid
            if(DBdata.email) this.email = DBdata.email
            if(DBdata.displayName) this.displayName = DBdata.displayName
            if(DBdata.photoURL) this.photoURL = DBdata.photoURL
            if(DBdata.providerData) {
                DBdata.providerData.forEach((provider)=>{
                    this.providers.push(provider)
                })
            }
        }
    }
}
export class AuthUser{

    constructor(email,phoneNumber,password,displayName,emailVerified = false,photoURL = '',disabled = false){
        this.email = email
        this.emailVerified = emailVerified
        this.phoneNumber = phoneNumber
        this.password = password
        this.displayName = displayName
        this.photoURL = photoURL
        this.disabled = disabled
    }
    toJSON(){
        return {
            email: this.email,
            emailVerified: this.emailVerified,
            phoneNumber: this.phoneNumber,
            displayName: this.displayName,
            photoURL: this.photoURL,
            disabled: this.disabled
        }
    }
    toDatabase(data){
        if(data){
            if(data.email) this.email = DBdata.email
            if(data.emailVerified) this.emailVerified = DBdata.emailVerified
            if(data.phoneNumber) this.phoneNumber = DBdata.phoneNumber
            if(data.displayName) this.displayName = DBdata.displayName
            if(data.photoURL) this.photoURL = DBdata.photoURL
            if(data.disabled) this.disabled = DBdata.disabled
        }
    }
    setDataFromDB(DBdata){
        if(DBdata){
            if(DBdata.email) this.email = DBdata.email
            if(DBdata.emailVerified) this.emailVerified = DBdata.emailVerified
            if(DBdata.phoneNumber) this.phoneNumber = DBdata.phoneNumber
            if(DBdata.displayName) this.displayName = DBdata.displayName
            if(DBdata.photoURL) this.photoURL = DBdata.photoURL
            if(DBdata.disabled) this.disabled = DBdata.disabled
        }
    }
}