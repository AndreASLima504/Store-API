import { CategoryService } from "../service/CategoryService"
import { Request, Response } from "express"
import { ProfileService } from "../service/ProfileService";

class ProfileController{
    async createProfile(request: Request, response: Response) {
        const {name} = request.body;

        const profile = 
        {
            name:name
        };
        const profileService = new ProfileService()
        const ret =  await profileService.createProfile(profile)
        return response.json(ret);
    }

    async listProfiles(request: Request, response: Response){
        const profileService = new ProfileService()
        const profiles = await profileService.listProfiles()
        return response.json(profiles)
    }


    async updateProfile(request: Request, response: Response) {
        const {name} = request.body;

        const id = request.params.id;

        const profile = 
        {
            id:id,
            name:name,
        };
        const profileService = new ProfileService()
        const ret =  await profileService.updateProfile(profile)
        return response.json(ret);
    }

    async deleteProfile(request: Request, response: Response){
        const id = request.params.id
        const profileService = new ProfileService()
        
        const res = await profileService.deleteProfile(id)
        return response.json(res)
    }
}

export {ProfileController}