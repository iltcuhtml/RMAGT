//PBG = PlayerBackGround
function GroundDetection () {                                      
    let PBGX = Math.floor(PlayerRealX / 80), PBGY = Math.floor(PlayerRealY / 80),
        PBGSideX = Math.floor((PlayerRealX + PlayerWidth) / 80), PBGSideY = Math.floor((PlayerRealY + PlayerHeight) / 80);

    if (DebugMod) {
        drawImage(TestSpr, 0, 0, 1440, 1440, PBGX * 80, PBGY * 80, 80, 80);
        drawImage(TestSpr, 0, 0, 1440, 1440, PBGSideX * 80, PBGY * 80, 80, 80);
    }

    // Bonkable_Ceiling : Standable Ground
    if ((Bonkable_Ceiling.includes(loadedLevel[PBGX + PBGY * loadedLevel_Width]) || 
        Bonkable_Ceiling.includes(loadedLevel[PBGSideX + PBGY * loadedLevel_Width])) && 
        PlayerMoveY <= 0) {
        
        PlayerRealY = PBGSideY * 80;
        PlayerMoveY = 0;
        
        isBonked = true;
    } else if ((Standable_Ground.includes(loadedLevel[PBGX + PBGSideY * loadedLevel_Width]) || 
        Standable_Ground.includes(loadedLevel[PBGSideX + PBGSideY * loadedLevel_Width])) && 
        PlayerMoveY >= 0) {
        
        isOnGround = true;
        PlayerMoveY = 0;
        
        isBonked = false;

        PlayerRealY = (PBGSideY * 80 - 80) + (80 - PlayerHeight);
    }
    
    if (!isBonked) {
        // Left Wall : Right Wall
        if (Left_Wall.includes(loadedLevel[PBGX + PBGY * loadedLevel_Width]) && PlayerMoveX <= 0) {
            PlayerRealX = PBGX * 80 + 80;
            PlayerMoveX = 0;
        } else if (Left_Wall.includes(loadedLevel[PBGSideX + PBGY * loadedLevel_Width]) && PlayerMoveX >= 0) {
            PlayerRealX = (PBGSideX * 80 - 80) + (80 - PlayerWidth);
            PlayerMoveX = 0;
        }
    }
}