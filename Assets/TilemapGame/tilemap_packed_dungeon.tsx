<?xml version="1.0" encoding="UTF-8"?>
<tileset version="1.10" tiledversion="1.11.2" name="tilemap_packed_dungeon" tilewidth="16" tileheight="16" tilecount="132" columns="12">
 <image source="../Tiled/Tilemap/tilemap_packed.png" width="192" height="176"/>
 <tile id="20">
  <objectgroup draworder="index" id="2">
   <object id="1" x="0" y="0" width="16" height="16"/>
  </objectgroup>
 </tile>
 <tile id="32">
  <objectgroup draworder="index" id="2">
   <object id="1" x="0" y="0" width="16" height="12.5"/>
  </objectgroup>
 </tile>
 <tile id="36">
  <objectgroup draworder="index" id="2">
   <object id="1" x="0" y="0" width="16" height="16"/>
   <object id="3" x="0" y="0" width="16" height="16"/>
  </objectgroup>
 </tile>
 <tile id="37">
  <objectgroup draworder="index" id="2">
   <object id="1" x="0" y="0" width="16" height="16"/>
  </objectgroup>
 </tile>
 <tile id="38">
  <objectgroup draworder="index" id="2">
   <object id="1" x="0" y="0" width="16" height="16"/>
  </objectgroup>
 </tile>
 <tile id="39">
  <objectgroup draworder="index" id="2">
   <object id="1" x="0" y="0" width="16" height="16"/>
  </objectgroup>
 </tile>
 <tile id="40">
  <objectgroup draworder="index" id="2">
   <object id="1" x="0" y="0" width="16" height="16"/>
  </objectgroup>
 </tile>
 <tile id="61">
  <properties>
   <property name="unity:IsTrigger" value="true"/>
   <property name="unity:layer" value="Hazard"/>
  </properties>
  <objectgroup draworder="index" id="2">
   <object id="1" x="1" y="1" width="14" height="14">
    <properties>
     <property name="unity:IsTrigger" type="bool" value="false"/>
     <property name="unity:layer" value="Hazard"/>
    </properties>
   </object>
  </objectgroup>
 </tile>
 <tile id="64">
  <objectgroup draworder="index" id="2">
   <object id="1" x="1" y="1" width="14" height="14"/>
  </objectgroup>
 </tile>
 <tile id="84">
  <objectgroup draworder="index" id="2">
   <object id="1" x="0" y="0" width="16" height="16"/>
  </objectgroup>
 </tile>
</tileset>
