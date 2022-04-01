// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile1 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile2 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level1":
            case "level1":return tiles.createTilemap(hex`1000100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000`, img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, [myTiles.transparency16], TileScale.Sixteen);
            case "Forest1":
            case "Forest1":return tiles.createTilemap(hex`0b001800010206030206030206030504020603020603020603010102060302060302060305040206030206030206030101020603020603020603050402060302060302060301010206030206030206030504020603020603020603010102060302060302060305040206030206030206030101020603020603020603050402060302060302060301010206030206030206030504020603020603020603010102060302060302060305040206030206030206030101020603020603020603050402060302060302060301010206030206030206030504020603020603020603010102060302060302060305040206030206030206030101020603020603020603050402060302060302060301`, img`
. . . . . . . . . . . 
. . . . . . . . . . . 
. . . . . . . . . . . 
. . . . . . . . . . . 
. . . . . . . . . . . 
. . . . . . . . . . . 
. . . . . . . . . . . 
. . . . . . . . . . . 
. . . . . . . . . . . 
. . . . . . . . . . . 
. . . . . . . . . . . 
. . . . . . . . . . . 
. . . . . . . . . . . 
. . . . . . . . . . . 
. . . . . . . . . . . 
. . . . . . . . . . . 
. . . . . . . . . . . 
. . . . . . . . . . . 
. . . . . . . . . . . 
. . . . . . . . . . . 
. . . . . . . . . . . 
. . . . . . . . . . . 
. . . . . . . . . . . 
. . . . . . . . . . . 
`, [myTiles.transparency16,sprites.castle.tileGrass2,sprites.castle.tilePath4,sprites.castle.tilePath6,sprites.castle.tileGrass1,sprites.castle.tileGrass3,sprites.castle.tilePath5], TileScale.Sixteen);
            case "level2":
            case "level2":return tiles.createTilemap(hex`1000100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000`, img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, [myTiles.transparency16], TileScale.Sixteen);
            case "Obstacle1":
            case "Obstacle1":return tiles.createTilemap(hex`03000400010705020904020904030806`, img`
. . . 
. . . 
. . . 
. 2 . 
`, [myTiles.transparency16,sprites.builtin.forestTiles5,sprites.builtin.forestTiles9,sprites.builtin.forestTiles13,sprites.builtin.forestTiles11,sprites.builtin.forestTiles7,sprites.builtin.forestTiles15,sprites.builtin.forestTiles6,sprites.builtin.forestTiles14,sprites.builtin.forestTiles10], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
            case "myTile":
            case "tile1":return tile1;
            case "Obstacle3":
            case "tile2":return tile2;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
