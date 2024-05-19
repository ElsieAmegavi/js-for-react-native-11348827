function createUserProfiles(originalNames, modifiedNames){

    const userProfiles = [];

    for(let i = 0; i < originalNames.length; i++){
        const userProfile = {
            originalName: originalNames[i],
            modifiedName: modifiedNames[i],
            id: i + 1
        };
        userProfiles.push(userProfile);
    }
    return userProfiles;
}

module.exports = createUserProfiles;
