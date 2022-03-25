import { MiddlewareFn } from "type-graphql";
import { Context } from "interfaces/context.interface";
import { User } from "resources/User/User.entity";
import { verifyToken,  JwtType } from "utils/jwt";
import {NotAuthenticatedError} from "utils/errors/";

async function verify(context: Context, token?: string){
    const { ogm } = context;
    const auth: any = await verifyToken({
        token,
        jwtType: JwtType.access,
      });
    const User = ogm.model("User");
    return await User.find({
        where: {
            id: auth.userId,
            }
        });
}

export function authorized(roles: string[]): MiddlewareFn {
    return async (props: any, next) => {
        try{
            const { context:{ ogm, authorization } }: { context: Context } = props;

            const user = verify(props.context, authorization);

            if(!user){
                throw new NotAuthenticatedError({
                    message: "User unauthorized",
          
                    data: {},
                    error: null,
                  });
            }


        }catch(err){
            console.log(err);
        }

    }
}