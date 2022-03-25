import { MiddlewareFn } from "type-graphql";
import { Context } from "interfaces/context.interface";
import { User } from "resources/User/User.entity";
import { verifyToken,  JwtType } from "utils/jwt";
import {NotAuthenticatedError} from "utils/errors/";

export async function verify(context: Context) {
    const { ogm, authorization: token } = context;
    const auth: any = await verifyToken({
        token,
        jwtType: JwtType.access,
      });
    console.log(auth);
    const User = ogm.model("User");

    let user = await User.find({
        where: {
            id: auth.userId,
            }
        });
    if (!user) {
        throw new Error("User not found");
    }
    return user[0];
    
}

export function authorized(): MiddlewareFn {
    return async (props: any, next) => {
        try{
            const { context}: { context: Context } = props;

            const user = await verify(props.context);

            if(!user){
                throw new NotAuthenticatedError({
                    message: "User unauthorized",
          
                    data: {},
                    error: null,
                  });
            }

            context.user = user;
            next();
        }catch(err){
            console.log(err);
        }

    }
}