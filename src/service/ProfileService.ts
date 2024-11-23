import { IProfileRequest } from "../interface/IProfileRequest";
import { ProfileRepositories } from "../repositories/profileRepositories";
import { getCustomRepository } from "typeorm";

class ProfileService{
    async createProfile({ name }: IProfileRequest){
        const profileRepositories = getCustomRepository(ProfileRepositories);

        const profileExists = await profileRepositories.findOne({
            name,
        });
        if(profileExists){
            throw new Error("Profile already exists with this name")
        }

        const profile = profileRepositories.create({
            name,
        })
        await profileRepositories.save(profile)
        return profile;
    }


    async listProfiles(){
        const profileRepositories = getCustomRepository(ProfileRepositories);
        const profiles = await profileRepositories
        .createQueryBuilder("profile")
        .getMany()
        
        return profiles
    }


    async updateProfile({ id, name }){
        const profileRepositories = getCustomRepository(ProfileRepositories)

        const profile = await profileRepositories.findOne({
            id,
        })
        if(!profile){
            throw new Error("Profile not found")
        }

        const profileExists = await profileRepositories.findOne({
            name,
        });
        if(profileExists){
            throw new Error("Profile already exists with this name")
        }

        profile.name = name

        const res = await profileRepositories.update(id, profile)

        return res
    }


    async deleteProfile(id:any){
        if(!id){
            throw new Error("Id error")
        }
        
        const profileRepositories = getCustomRepository(ProfileRepositories)

        const profileExists = profileRepositories.findOne({
            id,
        })
        if(!profileExists){
            throw new Error("Profile not found")
        }

        await profileRepositories.delete(id)
        var messageDelete = {
            message: "Registro excluido com sucesso"
        }
        return messageDelete
    }
}

export { ProfileService }