sequelize model:create --name Story --attributes title:string,url:string,ViewpointId:integer

sequelize model:create --name Viewpoint --attributes title:string

sequelize model:create --name User --attributes displayName:string,fb_id:string,accessToken:string,refreshToken:string,is_admin:boolean,is_admin_approved:boolean,PartyId:integer

sequelize model:create --name Response --attributes UserId:integer,ViewpointId:integer,agree:boolean

sequelize model:create --name Party --attributes name:string

sequelize model:create --name ResponseUser --attributes ResponseId:integer,UserId:integer

