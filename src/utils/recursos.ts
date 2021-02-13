import { Recurso } from '../app/models/Recurso';

export const HIGIENE: Recurso[] = [

    {
        nombre : 'alcohol',
        rutas : [
            
            'https://firebasestorage.googleapis.com/v0/b/arkids-da65c.appspot.com/o/higiene%2Falcohol.glb?alt=media&token=08e34590-368a-41ae-96b2-e947873d6a51',
            'https://firebasestorage.googleapis.com/v0/b/arkids-da65c.appspot.com/o/audio%2Fhigiene%2Falcohol_p.mp3?alt=media&token=124c582a-91c3-4d6e-8b78-bf824da0d52b',
            'https://firebasestorage.googleapis.com/v0/b/arkids-da65c.appspot.com/o/audio%2Fhigiene%2Falcohol_r.mp3?alt=media&token=9f6ca398-756d-4160-accd-f74dc11ba982'
        ],
        claves: [
            'manos'
        ],
        escala : '0.5 0.5 0.5'
    },
    {
        nombre : 'botiquín',
        rutas : [
            'https://firebasestorage.googleapis.com/v0/b/arkids-da65c.appspot.com/o/higiene%2Fbotiquin.glb?alt=media&token=a6a64d1b-62b5-464b-a6f1-20e3faf4b589',
            'https://firebasestorage.googleapis.com/v0/b/arkids-da65c.appspot.com/o/audio%2Fhigiene%2Fbotiquin_p.mp3?alt=media&token=33092a87-e2a1-478a-9fd8-16db78396f56',
            'https://firebasestorage.googleapis.com/v0/b/arkids-da65c.appspot.com/o/audio%2Fhigiene%2Fbotiquin_r.mp3?alt=media&token=bbdf79a1-9d7a-4da7-8dfc-371db4a4c12e'
        ],
        claves: [
            'primeros auxilios',
        ],
        escala : '0.2 0.2 0.2'
    },
    {
        nombre : 'cepillo de dientes',
        rutas : [
            'https://firebasestorage.googleapis.com/v0/b/arkids-da65c.appspot.com/o/higiene%2Fcepillo.glb?alt=media&token=55429328-5963-48c8-ab04-ecccc607ec32',
            'https://firebasestorage.googleapis.com/v0/b/arkids-da65c.appspot.com/o/audio%2Fhigiene%2Fcepillo_p.mp3?alt=media&token=216083c5-1646-4883-9c53-9cc3f121a440',
            'https://firebasestorage.googleapis.com/v0/b/arkids-da65c.appspot.com/o/audio%2Fhigiene%2Fcepillo_r.mp3?alt=media&token=24bcf07b-658d-4592-b381-8f7a43c817d2'
        ],
        claves: [
            'dientes',
        ],
        escala : '0.1 0.1 0.1'
    },
    {
        nombre : 'corta uñas',
        rutas : [
            'https://firebasestorage.googleapis.com/v0/b/arkids-da65c.appspot.com/o/higiene%2Fcortaunas.glb?alt=media&token=9ae4a219-8a48-443b-bad6-e0ca195cada1',
            'https://firebasestorage.googleapis.com/v0/b/arkids-da65c.appspot.com/o/audio%2Fhigiene%2Fcortaunas_p.mp3?alt=media&token=0ce0bcf6-3efc-4f5a-93af-60111ad1ff3e',
            'https://firebasestorage.googleapis.com/v0/b/arkids-da65c.appspot.com/o/audio%2Fhigiene%2Fcortaunas_r.mp3?alt=media&token=e4661663-bcb0-4fe9-b6f5-83c2695eb940'    
        ],
        claves: [
            'uñas'
        ],
        escala : '0.7 0.7 0.7'
    }, 
    {
        nombre : 'cotonetes',
        rutas : [
            'https://firebasestorage.googleapis.com/v0/b/arkids-da65c.appspot.com/o/higiene%2Fcotonetes.glb?alt=media&token=058af37a-0542-42e8-95f0-390126261b87',
            'https://firebasestorage.googleapis.com/v0/b/arkids-da65c.appspot.com/o/audio%2Fhigiene%2Fcotonetes_p.mp3?alt=media&token=8dccf61f-cf84-42ee-bee4-d24609842bd4',
            'https://firebasestorage.googleapis.com/v0/b/arkids-da65c.appspot.com/o/audio%2Fhigiene%2Fcotonetes_r.mp3?alt=media&token=f02a3e99-e2e1-4ecf-b71c-2a70519a2492'  
        ],
        claves: [
            'orejas',
            'oidos',
        ],
        escala : '0.3 0.3 0.3'
    },    
    {
        nombre : 'desodorante',
        rutas : [
            'https://firebasestorage.googleapis.com/v0/b/arkids-da65c.appspot.com/o/higiene%2Fdeshodorante.glb?alt=media&token=694160f5-d8fe-47e1-8638-ba25473ad20e',
            'https://firebasestorage.googleapis.com/v0/b/arkids-da65c.appspot.com/o/audio%2Fhigiene%2Fdesodorante_p.mp3?alt=media&token=2fe9b454-30d0-4149-9cea-145adaa0bb75',
            'https://firebasestorage.googleapis.com/v0/b/arkids-da65c.appspot.com/o/audio%2Fhigiene%2Fdesodorante_r.mp3?alt=media&token=c13f677a-3838-483d-b0ef-7e03e28e72c4'    
        ],
        claves: [
            'transpiración',
            'axilas'
        ],
        escala : '0.3 0.3 0.3'
    },
    {
        nombre : 'ducha',
        rutas : [
            'https://firebasestorage.googleapis.com/v0/b/arkids-da65c.appspot.com/o/higiene%2Fducha.glb?alt=media&token=4aa86c22-b4dc-4b38-a7f0-e90d080deee7',
            'https://firebasestorage.googleapis.com/v0/b/arkids-da65c.appspot.com/o/audio%2Fhigiene%2Fducha_p.mp3?alt=media&token=5818b801-0b00-4fdf-add9-5db694ca7a40',
            'https://firebasestorage.googleapis.com/v0/b/arkids-da65c.appspot.com/o/audio%2Fhigiene%2Fducha_r.mp3?alt=media&token=48459a2f-4c64-4480-83af-154d9de397d3'
        ],
        claves: [
            'baña'
        ],
        escala : '0.2 0.2 0.2'
    },
    {
        nombre : 'jabón',
        rutas : [
            'https://firebasestorage.googleapis.com/v0/b/arkids-da65c.appspot.com/o/higiene%2Fjabon.glb?alt=media&token=30b63463-8808-4c1c-9a45-ede162bba249',
            'https://firebasestorage.googleapis.com/v0/b/arkids-da65c.appspot.com/o/audio%2Fhigiene%2Fjabon_p.mp3?alt=media&token=0665092f-4450-4854-b094-c461edb6f4a0',
            'https://firebasestorage.googleapis.com/v0/b/arkids-da65c.appspot.com/o/audio%2Fhigiene%2Fjabon_r.mp3?alt=media&token=dfef8250-0e66-451a-b491-7031eafc44d6'
        ],
        claves: [
            'manos'
        ],
        escala : '0.4 0.4 0.4'
    },
    {
        nombre : 'mascarilla',
        rutas : [
            'https://firebasestorage.googleapis.com/v0/b/arkids-da65c.appspot.com/o/higiene%2Fmascarilla.glb?alt=media&token=84bffe59-6930-45e6-9aa2-5428c6b36e2a',
            'https://firebasestorage.googleapis.com/v0/b/arkids-da65c.appspot.com/o/audio%2Fhigiene%2Fmascarilla_p.mp3?alt=media&token=2051b867-860f-4fce-82a0-f936d1ba379d',
            'https://firebasestorage.googleapis.com/v0/b/arkids-da65c.appspot.com/o/audio%2Fhigiene%2Fmascarilla_r.mp3?alt=media&token=7fa01526-dc36-4516-979a-767c74c1b978'    
        ],
        claves: [
            'virus'
        ],
        escala : '0.5 0.5 0.5'
    },  

    {
        nombre : 'papel higiénico',
        rutas : [
            'https://firebasestorage.googleapis.com/v0/b/arkids-da65c.appspot.com/o/higiene%2Fpapel.glb?alt=media&token=7c71ca8f-0f45-43fa-8fba-302bb28ba1ac',
            'https://firebasestorage.googleapis.com/v0/b/arkids-da65c.appspot.com/o/audio%2Fhigiene%2Fpapel_p.mp3?alt=media&token=e62eab41-c205-4c44-88c6-b2d78141295b',
            'https://firebasestorage.googleapis.com/v0/b/arkids-da65c.appspot.com/o/audio%2Fhigiene%2Fpapel_r.mp3?alt=media&token=9e4d5044-287e-4ef0-a7f4-a6240874a65c'
        ],
        claves: [
            'baño'
        ],
        escala : '0.1 0.1 0.1'
    },
    {
        nombre : 'pasta dental',
        rutas : [
            'https://firebasestorage.googleapis.com/v0/b/arkids-da65c.appspot.com/o/higiene%2Fpasta.glb?alt=media&token=b0b3507d-3c9c-4d16-98b9-389d4a348521',
            'https://firebasestorage.googleapis.com/v0/b/arkids-da65c.appspot.com/o/audio%2Fhigiene%2Fpasta_p.mp3?alt=media&token=52feda6b-6bf1-43d9-bec2-93f35f9f6e6c',
            'https://firebasestorage.googleapis.com/v0/b/arkids-da65c.appspot.com/o/audio%2Fhigiene%2Fpasta_r.mp3?alt=media&token=1fdf6694-5247-403b-bbf8-60823d2480b8'    
        ],
        claves: [
            'cepillo de dientes',
            "cepillo dental"
        ],
        escala : '0.1 0.1 0.1',
    },
    {
        nombre : 'peinilla',
        rutas : [
            'https://firebasestorage.googleapis.com/v0/b/arkids-da65c.appspot.com/o/higiene%2Fpeinilla.glb?alt=media&token=02987e01-2f12-40b1-b0ef-8c7f3e38adba',
            'https://firebasestorage.googleapis.com/v0/b/arkids-da65c.appspot.com/o/audio%2Fhigiene%2Fpeinilla_p.mp3?alt=media&token=244b74ba-d6d1-4a52-ad73-46c0138d66b1',
            'https://firebasestorage.googleapis.com/v0/b/arkids-da65c.appspot.com/o/audio%2Fhigiene%2Fpeinilla_r.mp3?alt=media&token=ba09eb35-b036-42bf-a05b-7aefbdd69dd8'
        ],
        claves: [
            'cabello',
        ],
        escala : '0.5 0.5 0.5'
    },
    {
        nombre : 'shampoo',
        rutas : [
            'https://firebasestorage.googleapis.com/v0/b/arkids-da65c.appspot.com/o/higiene%2Fshampoo.glb?alt=media&token=0efe7171-a784-4268-a165-b9d04b3ed163',
            'https://firebasestorage.googleapis.com/v0/b/arkids-da65c.appspot.com/o/audio%2Fhigiene%2Fshampoo_p.mp3?alt=media&token=cffc4b60-a2a8-4be7-90e7-4d556f132b1f',
            'https://firebasestorage.googleapis.com/v0/b/arkids-da65c.appspot.com/o/audio%2Fhigiene%2Fshampoo_r.mp3?alt=media&token=02f07e74-59d1-43b5-bca7-862096518512'
        ],
        claves: [
            'seca',
            'cabello',
        ],
        escala : '0.1 0.1 0.1'
    },
    {
        nombre : 'talco',
        rutas : [
            'https://firebasestorage.googleapis.com/v0/b/arkids-da65c.appspot.com/o/higiene%2Ftalco.glb?alt=media&token=76b342e3-5ba1-4b68-8c89-dd5162ede275',
            'https://firebasestorage.googleapis.com/v0/b/arkids-da65c.appspot.com/o/audio%2Fhigiene%2Ftalco_p.mp3?alt=media&token=f7f022db-3475-4431-86c2-1ed49231b6e3',
            'https://firebasestorage.googleapis.com/v0/b/arkids-da65c.appspot.com/o/audio%2Fhigiene%2Ftalco_r.mp3?alt=media&token=1ae030d7-8b19-4cd3-a3e4-8db55c6bb210'
        ],
        claves: [
            'pies',
        ],
        escala : '0.3 0.3 0.3'
    },
    {
        nombre : 'toalla',
        rutas : [
            'https://firebasestorage.googleapis.com/v0/b/arkids-da65c.appspot.com/o/higiene%2Ftoalla.glb?alt=media&token=9d0f4bfc-f9b9-4d84-a12e-50233a1121ea',
            'https://firebasestorage.googleapis.com/v0/b/arkids-da65c.appspot.com/o/audio%2Fhigiene%2Ftoalla_p.mp3?alt=media&token=d5b6fcf9-c21f-42be-b7de-4788b6bb38a6',
            'https://firebasestorage.googleapis.com/v0/b/arkids-da65c.appspot.com/o/audio%2Fhigiene%2Ftoalla_r.mp3?alt=media&token=af3629b6-510f-4027-8504-c3d49b1f3d3b'       
        ],
        claves: [
            'seca',
        ],
        escala : '0.5 0.5 0.5'
    }

]

export const VESTIR : Recurso[] = [

    {
        nombre : 'armario',
        rutas : [
            
            'https://firebasestorage.googleapis.com/v0/b/arkids-da65c.appspot.com/o/vestir%2Farmario.glb?alt=media&token=09edf338-c531-4f99-9783-4bf1c4c6aa83',
            'https://firebasestorage.googleapis.com/v0/b/arkids-da65c.appspot.com/o/audio%2Fvestir%2Farmario_p.mp3?alt=media&token=e36588ec-2817-4489-b177-4dee4c115e55',
            'https://firebasestorage.googleapis.com/v0/b/arkids-da65c.appspot.com/o/audio%2Fvestir%2Farmario_r.mp3?alt=media&token=905a4dbc-2945-4fe5-b42a-952b7bd92879'
        ],
        claves: [
            'guarda'
        ],
        escala : '0.27 0.27 0.27'
    },
    {
        nombre : 'blusa',
        rutas : [
            
            'https://firebasestorage.googleapis.com/v0/b/arkids-da65c.appspot.com/o/vestir%2Fblusa.glb?alt=media&token=e08221e9-6997-47c6-870a-87589d060e25',
            'https://firebasestorage.googleapis.com/v0/b/arkids-da65c.appspot.com/o/audio%2Fvestir%2Fblusa_p.mp3?alt=media&token=9741441d-28ac-4130-8672-7a72e3cd2b34',
            'https://firebasestorage.googleapis.com/v0/b/arkids-da65c.appspot.com/o/audio%2Fvestir%2Fblusa_r.mp3?alt=media&token=b3b50152-74c1-419d-9b8d-d8813e7f3dfb'
        ],
        claves: [
            'mujer'
        ],
        escala : '0.4 0.4 0.4'
    },
    {
        nombre : 'calcetines',
        rutas : [
            
            'https://firebasestorage.googleapis.com/v0/b/arkids-da65c.appspot.com/o/vestir%2Fcalcetines.glb?alt=media&token=9f688e97-e4a5-4deb-8a5d-a11d6f674b0b',
            'https://firebasestorage.googleapis.com/v0/b/arkids-da65c.appspot.com/o/audio%2Fvestir%2Fcalcetines_p.mp3?alt=media&token=c226bb89-8541-4d41-8e8e-c7012f21d270',
            'https://firebasestorage.googleapis.com/v0/b/arkids-da65c.appspot.com/o/audio%2Fvestir%2Fcalcetines_r.mp3?alt=media&token=47211b3e-5a88-4aee-975b-2655ef1a67a7'
        ],
        claves: [
            'pies'
        ],
        escala : '0.35 0.35 0.35'
    },
    {
        nombre : 'camisa',
        rutas : [
            
            'https://firebasestorage.googleapis.com/v0/b/arkids-da65c.appspot.com/o/vestir%2Fcamisa.glb?alt=media&token=0befaaab-32b0-457a-a853-23bdd214db4f',
            'https://firebasestorage.googleapis.com/v0/b/arkids-da65c.appspot.com/o/audio%2Fvestir%2Fcamisa_p.mp3?alt=media&token=6b26ded6-8a20-4d68-9782-a3996ffff39a',
            'https://firebasestorage.googleapis.com/v0/b/arkids-da65c.appspot.com/o/audio%2Fvestir%2Fcamisa_r.mp3?alt=media&token=446802a2-8660-4db6-8290-120e0f1f050b'
        ],
        claves: [
            'varón'
        ],
        escala : '0.8 0.8 0.8'
    },
    {
        nombre : 'camiseta',
        rutas : [
            
            'https://firebasestorage.googleapis.com/v0/b/arkids-da65c.appspot.com/o/vestir%2Fcamiseta.glb?alt=media&token=12bd47df-6287-4b05-aaf6-6ea45d5454ee',
            'https://firebasestorage.googleapis.com/v0/b/arkids-da65c.appspot.com/o/audio%2Fvestir%2Fcamiseta_p.mp3?alt=media&token=830c1366-a17c-45c2-a32f-6307f2639d97',
            'https://firebasestorage.googleapis.com/v0/b/arkids-da65c.appspot.com/o/audio%2Fvestir%2Fcamiseta_r.mp3?alt=media&token=11f32e23-5955-47b2-a858-27556f903243'
        ],
        claves: [
            'calor'
        ],
        escala : '0.4 0.4 0.4'
    },
    {
        nombre : 'casaca',
        rutas : [
            
            'https://firebasestorage.googleapis.com/v0/b/arkids-da65c.appspot.com/o/vestir%2Fcasaca.glb?alt=media&token=374f2c30-3f92-4351-9a31-f8a49a3927a7',
            'https://firebasestorage.googleapis.com/v0/b/arkids-da65c.appspot.com/o/audio%2Fvestir%2Fcasaca_p.mp3?alt=media&token=00012061-ab04-4cfb-8b66-20d82a823c73',
            'https://firebasestorage.googleapis.com/v0/b/arkids-da65c.appspot.com/o/audio%2Fvestir%2Fcasaca_r.mp3?alt=media&token=ca540ea7-b129-40d3-ae89-42f5c6aa4fe1'
        ],
        claves: [
            'frio'
        ],
        escala : '0.25 0.25 0.25'
    },
    {
        nombre : 'falda',
        rutas : [
            
            'https://firebasestorage.googleapis.com/v0/b/arkids-da65c.appspot.com/o/vestir%2Ffalda.glb?alt=media&token=8d48046f-a05a-4bee-8c82-d0c64c798e6f',
            'https://firebasestorage.googleapis.com/v0/b/arkids-da65c.appspot.com/o/audio%2Fvestir%2Ffalda_p.mp3?alt=media&token=1b303542-3c46-4e30-b78f-0a79cebcb6b6',
            'https://firebasestorage.googleapis.com/v0/b/arkids-da65c.appspot.com/o/audio%2Fvestir%2Ffalda_r.mp3?alt=media&token=19d5cdc4-672f-4f76-83cc-8e182ca6aadb'
        ],
        claves: [
            'mujer',
            'piernas'
        ],
        escala : '0.15 0.15 0.15'
    },
    {
        nombre : 'gorra',
        rutas : [
            
            'https://firebasestorage.googleapis.com/v0/b/arkids-da65c.appspot.com/o/vestir%2Fgorra.glb?alt=media&token=36022fc9-21ca-44d6-ba87-38f2969c54c2',
            'https://firebasestorage.googleapis.com/v0/b/arkids-da65c.appspot.com/o/audio%2Fvestir%2Fgorra_p.mp3?alt=media&token=f2a259eb-9269-40f5-8fce-c825d977d1aa',
            'https://firebasestorage.googleapis.com/v0/b/arkids-da65c.appspot.com/o/audio%2Fvestir%2Fgorra_r.mp3?alt=media&token=a4cdefce-b29f-44a2-ae3c-36f1f3901b10'
        ],
        claves: [
            'sol',
            'cabeza'
        ],
        escala : '0.1 0.1 0.1'
    },
    {
        nombre : 'pantalón',
        rutas : [
            
            'https://firebasestorage.googleapis.com/v0/b/arkids-da65c.appspot.com/o/vestir%2Fpantalon.glb?alt=media&token=0d8651e3-013f-4b7f-a7f7-285fe6425d5b',
            'https://firebasestorage.googleapis.com/v0/b/arkids-da65c.appspot.com/o/audio%2Fvestir%2Fpantalon_p.mp3?alt=media&token=27f30756-dace-4125-a239-b909ee833b89',
            'https://firebasestorage.googleapis.com/v0/b/arkids-da65c.appspot.com/o/audio%2Fvestir%2Fpantalon_r.mp3?alt=media&token=584d4d52-c175-4eba-bdfd-aaf0bc7957a1'
        ],
        claves: [
            'piernas'
        ],
        escala : '0.5 0.5 0.5'
    },
    {
        nombre : 'plancha',
        rutas : [
            
            'https://firebasestorage.googleapis.com/v0/b/arkids-da65c.appspot.com/o/vestir%2Fplancha.glb?alt=media&token=ebf3cc56-cd72-43fd-94ec-e77ae3fda6fa',
            'https://firebasestorage.googleapis.com/v0/b/arkids-da65c.appspot.com/o/audio%2Fvestir%2Fplancha_p.mp3?alt=media&token=4d1880d3-656d-42b6-a334-510fa328f892',
            'https://firebasestorage.googleapis.com/v0/b/arkids-da65c.appspot.com/o/audio%2Fvestir%2Fplancha_r.mp3?alt=media&token=1a771c19-099a-4c8e-bb8c-d1dae15549ed'
        ],
        claves: [
            'arrugas'
        ],
        escala : '0.25 0.25 0.25'
    },
    {
        nombre : 'planchador',
        rutas : [
            
            'https://firebasestorage.googleapis.com/v0/b/arkids-da65c.appspot.com/o/vestir%2Fplanchador.glb?alt=media&token=5fe41e67-ef04-4911-8c7d-9ac0fa91071f',
            'https://firebasestorage.googleapis.com/v0/b/arkids-da65c.appspot.com/o/audio%2Fvestir%2Fplanchador_p.mp3?alt=media&token=7de3b0a2-5cf0-44aa-a3f0-2e528609ad43',
            'https://firebasestorage.googleapis.com/v0/b/arkids-da65c.appspot.com/o/audio%2Fvestir%2Fplanchador_r.mp3?alt=media&token=13acac2a-baa4-4382-ba63-c1be8de257e6'
        ],
        claves: [
            'plancha'
        ],
        escala : '0.3 0.3 0.3'
    },
    {
        nombre : 'tendedero',
        rutas : [
            
            'https://firebasestorage.googleapis.com/v0/b/arkids-da65c.appspot.com/o/vestir%2Ftendedero.glb?alt=media&token=2054ab5b-1c86-4ae6-b551-a6a128b4f92d',
            'https://firebasestorage.googleapis.com/v0/b/arkids-da65c.appspot.com/o/audio%2Fvestir%2Ftendedero_p.mp3?alt=media&token=68408792-6394-4d25-84e7-d6f27bd28d13',
            'https://firebasestorage.googleapis.com/v0/b/arkids-da65c.appspot.com/o/audio%2Fvestir%2Ftendedero_r.mp3?alt=media&token=414c2569-962f-4790-9b0b-141897b74296'
        ],
        claves: [
            'seca'
        ],
        escala : '0.4 0.4 0.4'
    },
    {
        nombre : 'tina',
        rutas : [
            
            'https://firebasestorage.googleapis.com/v0/b/arkids-da65c.appspot.com/o/vestir%2Ftina.glb?alt=media&token=b5972eb8-dcca-4a39-aa2d-e336182ae7c0',
            'https://firebasestorage.googleapis.com/v0/b/arkids-da65c.appspot.com/o/audio%2Fvestir%2Ftina_p.mp3?alt=media&token=0d67410d-38f3-4c33-a7eb-52e188884f61',
            'https://firebasestorage.googleapis.com/v0/b/arkids-da65c.appspot.com/o/audio%2Fvestir%2Ftina_r.mp3?alt=media&token=67aa84fb-713a-4d75-929c-98fff0592221'
        ],
        claves: [
            'lava'
        ],
        escala : '0.33 0.33 0.33'
    },
    {
        nombre : 'vestido',
        rutas : [
            
            'https://firebasestorage.googleapis.com/v0/b/arkids-da65c.appspot.com/o/vestir%2Fvestido.glb?alt=media&token=954d67f8-8497-4e75-8d7c-3d746678321f',
            'https://firebasestorage.googleapis.com/v0/b/arkids-da65c.appspot.com/o/audio%2Fvestir%2Fvestido_p.mp3?alt=media&token=afda352b-f2bf-4fda-bfa8-c803fac33a42',
            'https://firebasestorage.googleapis.com/v0/b/arkids-da65c.appspot.com/o/audio%2Fvestir%2Fvestido_r.mp3?alt=media&token=add46b6d-ad5a-4f9a-a300-31d0eda6cbed'
        ],
        claves: [
            'mujer'
        ],
        escala : '0.4 0.4 0.4'
    },
    {
        nombre : 'zapatos',
        rutas : [
            
            'https://firebasestorage.googleapis.com/v0/b/arkids-da65c.appspot.com/o/vestir%2Fzapatos.glb?alt=media&token=35854db8-1008-4288-b9a8-c1c2ab56f3ae',
            'https://firebasestorage.googleapis.com/v0/b/arkids-da65c.appspot.com/o/audio%2Fvestir%2Fzapatos_p.mp3?alt=media&token=ecf3ae0a-991b-4a94-acb7-4400796c7feb',
            'https://firebasestorage.googleapis.com/v0/b/arkids-da65c.appspot.com/o/audio%2Fvestir%2Fzapatos_r.mp3?alt=media&token=96805abb-5f58-4cb3-866e-a6fef04cbaaa'
        ],
        claves: [
            'pies'
        ],
        escala : '0.3 0.3 0.3'
    },
]

export const COCINA : Recurso[] = [
    {
        nombre : 'cernidora',
        rutas : [
            
            'https://firebasestorage.googleapis.com/v0/b/arkids-da65c.appspot.com/o/cocina%2Fcernidor.glb?alt=media&token=131985b8-607d-445f-b3c6-03a896d24e6b',
            'https://firebasestorage.googleapis.com/v0/b/arkids-da65c.appspot.com/o/audio%2Fcocina%2Fcernidora_p.mp3?alt=media&token=65eac0c0-b5c9-4eb0-aeae-2e5b1bddccb9',
            'https://firebasestorage.googleapis.com/v0/b/arkids-da65c.appspot.com/o/audio%2Fcocina%2Fcernidora_r.mp3?alt=media&token=d90f9928-c2c0-423f-b674-79af5f4216b2'
        ],
        claves: [
            'utensilio de cocina'
        ],
        escala : '0.2 0.2 0.2'
    },
    {
        nombre : 'cocina',
        rutas : [
            
            'https://firebasestorage.googleapis.com/v0/b/arkids-da65c.appspot.com/o/cocina%2Fcocina.glb?alt=media&token=a62637b3-7015-4f83-95b7-2c9986b2642a',
            'https://firebasestorage.googleapis.com/v0/b/arkids-da65c.appspot.com/o/audio%2Fcocina%2Fcocina_p.mp3?alt=media&token=86e3cd41-bddd-4b41-bfc9-5b179a6745fa',
            'https://firebasestorage.googleapis.com/v0/b/arkids-da65c.appspot.com/o/audio%2Fcocina%2Fcocina_r.mp3?alt=media&token=626bc671-7410-4706-98b3-f64fd63e0548'
        ],
        claves: [
            'calentar',
            'cocinar'
        ],
        escala : '0.33 0.33 0.33'
    },
    {
        nombre : 'cuchara',
        rutas : [
            
            'https://firebasestorage.googleapis.com/v0/b/arkids-da65c.appspot.com/o/cocina%2Fcuchara.glb?alt=media&token=60f11f70-2628-4718-8884-ecc318fe1369',
            'https://firebasestorage.googleapis.com/v0/b/arkids-da65c.appspot.com/o/audio%2Fcocina%2Fcuchara_p.mp3?alt=media&token=c68303f4-3367-4a21-bb89-121cfd581113',
            'https://firebasestorage.googleapis.com/v0/b/arkids-da65c.appspot.com/o/audio%2Fcocina%2Fcuchara_r.mp3?alt=media&token=4bef54e2-11d2-495e-8bb9-b3475738e5ba'
        ],
        claves: [
            'come',
            'servi'
        ],
        escala : '0.2 0.2 0.2'
    },
    {
        nombre : 'cuchillo',
        rutas : [
            
            'https://firebasestorage.googleapis.com/v0/b/arkids-da65c.appspot.com/o/cocina%2Fcuchillo.glb?alt=media&token=2fe2f1b1-75b9-4480-8627-36416b0a0684',
            'https://firebasestorage.googleapis.com/v0/b/arkids-da65c.appspot.com/o/audio%2Fcocina%2Fcuchillo_p.mp3?alt=media&token=2108b162-9bf8-4edf-b300-556dcfe56edb',
            'https://firebasestorage.googleapis.com/v0/b/arkids-da65c.appspot.com/o/audio%2Fcocina%2Fcuchillo_r.mp3?alt=media&token=4010d384-05f2-4111-a3d0-0b317527fffa'
        ],
        claves: [
            'corta'
        ],
        escala : '0.2 0.2 0.2'
    },
    {
        nombre : 'espátula',
        rutas : [
            
            'https://firebasestorage.googleapis.com/v0/b/arkids-da65c.appspot.com/o/cocina%2Fespatula.glb?alt=media&token=74ec1541-f7b7-49f2-903b-24f0c83ec8c4',
            'https://firebasestorage.googleapis.com/v0/b/arkids-da65c.appspot.com/o/audio%2Fcocina%2Fespatula_p.mp3?alt=media&token=6981d122-84f7-4cff-9121-f9a7c86a1e9d',
            'https://firebasestorage.googleapis.com/v0/b/arkids-da65c.appspot.com/o/audio%2Fcocina%2Fespatula_r.mp3?alt=media&token=78b4b6b5-88b0-4d17-b5b0-18f621e01ce3'
        ],
        claves: [
            'vuelta',
            'despega'
        ],
        escala : '0.35 0.35 0.35'
    },
    {
        nombre : 'exprimidor',
        rutas : [
            
            'https://firebasestorage.googleapis.com/v0/b/arkids-da65c.appspot.com/o/cocina%2Fexprimidor.glb?alt=media&token=31361308-790e-4888-8b8f-859e07b0ea7c',
            'https://firebasestorage.googleapis.com/v0/b/arkids-da65c.appspot.com/o/audio%2Fcocina%2Fexprimidor_p.mp3?alt=media&token=b7ae1ba7-f72d-402e-be8c-4582af794194',
            'https://firebasestorage.googleapis.com/v0/b/arkids-da65c.appspot.com/o/audio%2Fcocina%2Fexprimidor_r.mp3?alt=media&token=c8f9704c-7adb-4dde-8293-7aaed6972f59'
        ],
        claves: [
            'jugo',
        ],
        escala : '0.25 0.25 0.25'
    },
    {
        nombre : 'guantes de cocina',
        rutas : [
            
            'https://firebasestorage.googleapis.com/v0/b/arkids-da65c.appspot.com/o/cocina%2Fguantes.glb?alt=media&token=d0bb251a-b37e-4231-a4fe-caca65f1ddae',
            'https://firebasestorage.googleapis.com/v0/b/arkids-da65c.appspot.com/o/audio%2Fcocina%2Fguantes_p.mp3?alt=media&token=0b66a67d-11e7-4fec-bb0b-762561ee3f19',
            'https://firebasestorage.googleapis.com/v0/b/arkids-da65c.appspot.com/o/audio%2Fcocina%2Fguantes_r.mp3?alt=media&token=8ee9d7e0-d2b9-46fa-9c6c-882cd01c056d'
        ],
        claves: [
            'quemadura',
        ],
        escala : '0.3 0.3 0.3'
    },
    {
        nombre : 'olla',
        rutas : [
            
            'https://firebasestorage.googleapis.com/v0/b/arkids-da65c.appspot.com/o/cocina%2Folla.glb?alt=media&token=c137e893-91d8-44bc-953e-12049ceb2939',
            'https://firebasestorage.googleapis.com/v0/b/arkids-da65c.appspot.com/o/audio%2Fcocina%2Folla_p.mp3?alt=media&token=7a907d16-f575-42d1-9550-ce473d7ebcb2',
            'https://firebasestorage.googleapis.com/v0/b/arkids-da65c.appspot.com/o/audio%2Fcocina%2Folla_r.mp3?alt=media&token=41915f11-89a6-475a-9d10-b5d397332321'
        ],
        claves: [
            'calenta',
        ],
        escala : '0.4 0.4 0.4'
    },
    {
        nombre : 'plato',
        rutas : [
            
            'https://firebasestorage.googleapis.com/v0/b/arkids-da65c.appspot.com/o/cocina%2Fplato.glb?alt=media&token=891d2f66-09c8-470a-a32f-12e3a6afa38b',
            'https://firebasestorage.googleapis.com/v0/b/arkids-da65c.appspot.com/o/audio%2Fcocina%2Fplato_p.mp3?alt=media&token=90370f5d-278d-4a21-85d7-14f94739ed8e',
            'https://firebasestorage.googleapis.com/v0/b/arkids-da65c.appspot.com/o/audio%2Fcocina%2Fplato_r.mp3?alt=media&token=0c18cc3f-639d-4d3b-b20d-aa4a348a3d4c'
        ],
        claves: [
            'servi',
            'sirve'
        ],
        escala : '0.6 0.6 0.6'
    },
    {
        nombre : 'rallador',
        rutas : [
            
            'https://firebasestorage.googleapis.com/v0/b/arkids-da65c.appspot.com/o/cocina%2Frayador.glb?alt=media&token=6d5b0b65-0ab0-49ed-8c35-9505ae0664c5',
            'https://firebasestorage.googleapis.com/v0/b/arkids-da65c.appspot.com/o/audio%2Fcocina%2Frayador_p.mp3?alt=media&token=cd9fe9e9-a2e8-4c16-a26f-fb3dc05de732',
            'https://firebasestorage.googleapis.com/v0/b/arkids-da65c.appspot.com/o/audio%2Fcocina%2Frayador_r.mp3?alt=media&token=5c816d1f-aa08-4064-8edf-35c5ad5fa8cc'
        ],
        claves: [
            'pica',
        ],
        escala : '0.6 0.6 0.6'
    },
    {
        nombre : 'rodillo',
        rutas : [

            'https://firebasestorage.googleapis.com/v0/b/arkids-da65c.appspot.com/o/cocina%2Frodillo.glb?alt=media&token=8f300fa7-6ee5-4579-ba54-c2c5cb256f66',
            'https://firebasestorage.googleapis.com/v0/b/arkids-da65c.appspot.com/o/audio%2Fcocina%2Frodillo_p.mp3?alt=media&token=45b57041-4449-4210-a0f7-ebc11bdfc0d6',
            'https://firebasestorage.googleapis.com/v0/b/arkids-da65c.appspot.com/o/audio%2Fcocina%2Frodillo_r.mp3?alt=media&token=46673d7a-874e-43ef-8972-d0dcd1f9dd83'
        ],
        claves: [
            'pan',
            'torta',
            'amasar'
        ],
        escala : '0.25 0.25 0.25'
    },
    {
        nombre : 'sartén',
        rutas : [

            'https://firebasestorage.googleapis.com/v0/b/arkids-da65c.appspot.com/o/cocina%2Fsarten.glb?alt=media&token=31519cf3-fce0-4b45-8260-d84fb7becee9',
            'https://firebasestorage.googleapis.com/v0/b/arkids-da65c.appspot.com/o/audio%2Fcocina%2Fsarten_p.mp3?alt=media&token=69312a6c-e86d-4b2c-a352-301e266efac5',
            'https://firebasestorage.googleapis.com/v0/b/arkids-da65c.appspot.com/o/audio%2Fcocina%2Fsarten_r.mp3?alt=media&token=f526b2f7-5114-47d8-ac85-0381accb059c'
        ],
        claves: [
            'frei',
        ],
        escala : '0.25 0.25 0.25'
    },
    {
        nombre : 'tabla de picar',
        rutas : [

            'https://firebasestorage.googleapis.com/v0/b/arkids-da65c.appspot.com/o/cocina%2Ftabla.glb?alt=media&token=457444ac-0303-4993-b74b-8cb37b7feca7',
            'https://firebasestorage.googleapis.com/v0/b/arkids-da65c.appspot.com/o/audio%2Fcocina%2Ftabla_p.mp3?alt=media&token=63640e6c-453d-4672-abcb-02f6aafb6278',
            'https://firebasestorage.googleapis.com/v0/b/arkids-da65c.appspot.com/o/audio%2Fcocina%2Ftabla_r.mp3?alt=media&token=31a512e0-3c04-474c-b923-79cdb680b294'
        ],
        claves: [
            'pica',
        ],
        escala : '0.3 0.3 0.3'
    },
    {
        nombre : 'tenedor',
        rutas : [

            'https://firebasestorage.googleapis.com/v0/b/arkids-da65c.appspot.com/o/cocina%2Ftenedor.glb?alt=media&token=4e880fa9-df11-4c42-8d02-83f5ac0bdb7a',
            'https://firebasestorage.googleapis.com/v0/b/arkids-da65c.appspot.com/o/audio%2Fcocina%2Ftenedor_p.mp3?alt=media&token=f0e62f49-cf84-4fdc-8a62-a79cd2a4745a',
            'https://firebasestorage.googleapis.com/v0/b/arkids-da65c.appspot.com/o/audio%2Fcocina%2Ftenedor_r.mp3?alt=media&token=f0087c73-7231-4ecf-9dc7-4a471ffb49c9'
        ],
        claves: [
            'sosten',
            'sujet'
        ],
        escala : '0.4 0.4 0.4'
    },
    {
        nombre : 'vaso',
        rutas : [

            'https://firebasestorage.googleapis.com/v0/b/arkids-da65c.appspot.com/o/cocina%2Fvaso.glb?alt=media&token=c91ea908-b600-4b77-9069-b260f78966c9',
            'https://firebasestorage.googleapis.com/v0/b/arkids-da65c.appspot.com/o/audio%2Fcocina%2Fvaso_p.mp3?alt=media&token=2efbe9d0-c81b-42ca-aba7-6a3664ed991b',
            'https://firebasestorage.googleapis.com/v0/b/arkids-da65c.appspot.com/o/audio%2Fcocina%2Fvaso_r.mp3?alt=media&token=558f761b-84d9-4183-a3b1-51981f9d670f'
        ],
        claves: [
            'bebida',
        ],
        escala : '0.5 0.5 0.5'
    },
]

export const HOGAR : Recurso[] = [

    {
        nombre : 'aspiradora',
        rutas : [

            'https://firebasestorage.googleapis.com/v0/b/arkids-da65c.appspot.com/o/hogar%2Faspiradora.glb?alt=media&token=9b5449dd-486c-4e4e-853e-dd3802db9059',
            'https://firebasestorage.googleapis.com/v0/b/arkids-da65c.appspot.com/o/audio%2Fhogar%2Faspiradora_p.mp3?alt=media&token=5602dba8-4046-4cb9-a552-ded1d511915f',
            'https://firebasestorage.googleapis.com/v0/b/arkids-da65c.appspot.com/o/audio%2Fhogar%2Faspiradora_r.mp3?alt=media&token=0beebc11-4f50-4234-9491-756e01834e12'
        ],
        claves: [
            'polvo',
        ],
        escala : '0.4 0.4 0.4'
    },
    {
        nombre : 'basurero',
        rutas : [

            'https://firebasestorage.googleapis.com/v0/b/arkids-da65c.appspot.com/o/hogar%2Fbasurero.glb?alt=media&token=00f12bd1-084c-4bc5-865b-ba2ac1046e97',
            'https://firebasestorage.googleapis.com/v0/b/arkids-da65c.appspot.com/o/audio%2Fhogar%2Fbasurero_p.mp3?alt=media&token=56d41264-1293-4ab6-bebc-8b54259a8b01',
            'https://firebasestorage.googleapis.com/v0/b/arkids-da65c.appspot.com/o/audio%2Fhogar%2Fbasurero_r.mp3?alt=media&token=868a7054-51e8-4b3a-bcb4-b8283bd7ce42'
        ],
        claves: [
            'basura',
            'recicla'
        ],
        escala : '0.3 0.3 0.3'
    },
    {
        nombre : 'cafetera',
        rutas : [

            'https://firebasestorage.googleapis.com/v0/b/arkids-da65c.appspot.com/o/hogar%2Fcafetera.glb?alt=media&token=c4eb902b-36ca-4e1a-bf1c-5ffc33083295',
            'https://firebasestorage.googleapis.com/v0/b/arkids-da65c.appspot.com/o/audio%2Fhogar%2Fcafetera_p.mp3?alt=media&token=fd8265d0-e5b0-4e38-a01d-2c17343bd0a2',
            'https://firebasestorage.googleapis.com/v0/b/arkids-da65c.appspot.com/o/audio%2Fhogar%2Fcafetera_r.mp3?alt=media&token=cc146f05-08bf-4035-8914-8a78cb44565a'
        ],
        claves: [
            'bebida',
            'café'
        ],
        escala : '0.7 0.7 0.7'
    },
    {
        nombre : 'desinfectante',
        rutas : [

            'https://firebasestorage.googleapis.com/v0/b/arkids-da65c.appspot.com/o/hogar%2Fdesinfectante.glb?alt=media&token=f2307e37-c41e-4189-ac6c-12f6f4b578ca',
            'https://firebasestorage.googleapis.com/v0/b/arkids-da65c.appspot.com/o/audio%2Fhogar%2Fdesinfectante_p.mp3?alt=media&token=4cc43278-7a4d-4ff0-8b64-1417ec04265e',
            'https://firebasestorage.googleapis.com/v0/b/arkids-da65c.appspot.com/o/audio%2Fhogar%2Fdesinfectante_r.mp3?alt=media&token=d9e306f4-f4b0-48b3-b7f8-56cec41f2fb2'
        ],
        claves: [
            'desinfecta',
        ],
        escala : '0.3 0.3 0.3'
    },
    {
        nombre : 'escoba',
        rutas : [

            'https://firebasestorage.googleapis.com/v0/b/arkids-da65c.appspot.com/o/hogar%2Fescoba.glb?alt=media&token=a5b65271-4908-4895-bd79-2531c6717aaa',
            'https://firebasestorage.googleapis.com/v0/b/arkids-da65c.appspot.com/o/audio%2Fhogar%2Fescoba_p.mp3?alt=media&token=00bb55cd-9912-429b-9833-bd9270b2a282',
            'https://firebasestorage.googleapis.com/v0/b/arkids-da65c.appspot.com/o/audio%2Fhogar%2Fescoba_r.mp3?alt=media&token=62006cca-649b-449d-9c46-c20bcfd3678f'
        ],
        claves: [
            'barre',
        ],
        escala : '0.5 0.5 0.5'
    },
    {
        nombre : 'Esponja',
        rutas : [

            'https://firebasestorage.googleapis.com/v0/b/arkids-da65c.appspot.com/o/hogar%2Fesponja.glb?alt=media&token=f21713cf-e261-4258-9948-4dd2739187e0',
            'https://firebasestorage.googleapis.com/v0/b/arkids-da65c.appspot.com/o/audio%2Fhogar%2Fesponja_p.mp3?alt=media&token=c6ee7b8c-777d-41b4-b687-30b70becbd36',
            'https://firebasestorage.googleapis.com/v0/b/arkids-da65c.appspot.com/o/audio%2Fhogar%2Fesponja_r.mp3?alt=media&token=c4f085d9-e33b-4edd-a30d-c3df768d29d6'
        ],
        claves: [
            'frega',
        ],
        escala : '0.3 0.3 0.3'
    },
    {
        nombre : 'fregadero',
        rutas : [

            'https://firebasestorage.googleapis.com/v0/b/arkids-da65c.appspot.com/o/hogar%2Ffregadero.glb?alt=media&token=85eaa445-97db-461f-8ade-2e49d6d7e3b5',
            'https://firebasestorage.googleapis.com/v0/b/arkids-da65c.appspot.com/o/audio%2Fhogar%2Ffregadero_p.mp3?alt=media&token=673e842d-1ded-43ed-aa39-a1351e1714bd',
            'https://firebasestorage.googleapis.com/v0/b/arkids-da65c.appspot.com/o/audio%2Fhogar%2Ffregadero_r.mp3?alt=media&token=cfaf3dee-6949-4790-9d2a-769cc621c536'
        ],
        claves: [
            'plato',
        ],
        escala : '0.4 0.4 0.4'
    },
    {
        nombre : 'guantes de limpieza',
        rutas : [

            'https://firebasestorage.googleapis.com/v0/b/arkids-da65c.appspot.com/o/hogar%2Fguantes.glb?alt=media&token=d053b7b5-fd07-48c4-a8ee-5dac856fd9bf',
            'https://firebasestorage.googleapis.com/v0/b/arkids-da65c.appspot.com/o/audio%2Fhogar%2Fguantes_l_p.mp3?alt=media&token=e8981c33-9247-429f-9b17-732dd455599a',
            'https://firebasestorage.googleapis.com/v0/b/arkids-da65c.appspot.com/o/audio%2Fhogar%2Fguantes_l_r.mp3?alt=media&token=44d45777-0494-4473-bd0c-3527a0fb6c25'
        ],
        claves: [
            'limpia',
        ],
        escala : '0.4 0.4 0.4'
    },
    {
        nombre : 'lavadora',
        rutas : [

            'https://firebasestorage.googleapis.com/v0/b/arkids-da65c.appspot.com/o/hogar%2Flavadora.glb?alt=media&token=7c958fef-2082-4bce-8b7b-358f3db5292a',
            'https://firebasestorage.googleapis.com/v0/b/arkids-da65c.appspot.com/o/audio%2Fhogar%2Flavadora_p.mp3?alt=media&token=cb5e3d69-bbf2-48da-bb3e-4ca5606d211e',
            'https://firebasestorage.googleapis.com/v0/b/arkids-da65c.appspot.com/o/audio%2Fhogar%2Flavadora_r.mp3?alt=media&token=d7175c5a-d13c-4774-bc95-ecf648c9bd54'
        ],
        claves: [
            'ropa',
        ],
        escala : '0.4 0.4 0.4'
    },
    {
        nombre : 'licuadora',
        rutas : [

            'https://firebasestorage.googleapis.com/v0/b/arkids-da65c.appspot.com/o/hogar%2Flicuadora.glb?alt=media&token=12158d26-9f47-4a0b-ad89-fa6badd33d1d',
            'https://firebasestorage.googleapis.com/v0/b/arkids-da65c.appspot.com/o/audio%2Fhogar%2Flicuadora_p.mp3?alt=media&token=344a9d77-5ef6-4bf7-8924-f52a0891380c',
            'https://firebasestorage.googleapis.com/v0/b/arkids-da65c.appspot.com/o/audio%2Fhogar%2Flicuadora_r.mp3?alt=media&token=62a91605-6c86-4cba-ab1c-51193ce98da6'
        ],
        claves: [
            'jugo',
            'batido'
        ],
        escala : '0.4 0.4 0.4'
    },
    {
        nombre : 'microondas',
        rutas : [

            'https://firebasestorage.googleapis.com/v0/b/arkids-da65c.appspot.com/o/hogar%2Fmicroondas.glb?alt=media&token=b6e7fdea-d54b-471b-9e8d-9169f6b6e119',
            'https://firebasestorage.googleapis.com/v0/b/arkids-da65c.appspot.com/o/audio%2Fhogar%2Fmicroondas_p.mp3?alt=media&token=1aafe6a7-39a4-449b-ac4e-138f2ccadc0e',
            'https://firebasestorage.googleapis.com/v0/b/arkids-da65c.appspot.com/o/audio%2Fhogar%2Fmicroondas_r.mp3?alt=media&token=2e274488-b3b0-48d6-921a-0439a4429e56'
        ],
        claves: [
            'calenta'
        ],
        escala : '0.3 0.3 0.3'
    },
    {
        nombre : 'recogedor',
        rutas : [

            'https://firebasestorage.googleapis.com/v0/b/arkids-da65c.appspot.com/o/hogar%2Frecogedor.glb?alt=media&token=9383db97-4097-4a35-bfe3-719fe231bb12',
            'https://firebasestorage.googleapis.com/v0/b/arkids-da65c.appspot.com/o/audio%2Fhogar%2Frecogedor_p.mp3?alt=media&token=da58c572-45df-4d3c-ad2b-a6db1c490164',
            'https://firebasestorage.googleapis.com/v0/b/arkids-da65c.appspot.com/o/audio%2Fhogar%2Frecogedor_r.mp3?alt=media&token=87adeac0-86a1-4f9a-bd0b-65ed986d20f5'
        ],
        claves: [
            'recoge'
        ],
        escala : '0.3 0.3 0.3'
    },
    {
        nombre : 'refrigerador',
        rutas : [

            'https://firebasestorage.googleapis.com/v0/b/arkids-da65c.appspot.com/o/hogar%2Frefrigerador.glb?alt=media&token=bb03a9bf-43ba-4e57-95a9-76373ab3efc0',
            'https://firebasestorage.googleapis.com/v0/b/arkids-da65c.appspot.com/o/audio%2Fhogar%2Frefrigerador_p.mp3?alt=media&token=c46681d8-5649-4254-b443-0da4500c54a0',
            'https://firebasestorage.googleapis.com/v0/b/arkids-da65c.appspot.com/o/audio%2Fhogar%2Frefrigerador_r.mp3?alt=media&token=18b145a3-ed78-4fee-b1ee-e9d677ff536e'
        ],
        claves: [
            'congela',
            'conserva',
            'enfría'
        ],
        escala : '0.3 0.3 0.3'
    },
    {
        nombre : 'tostadora',
        rutas : [

            'https://firebasestorage.googleapis.com/v0/b/arkids-da65c.appspot.com/o/hogar%2Ftostadora.glb?alt=media&token=901ce4ab-a19d-4acd-918d-c8ebb5773e93',
            'https://firebasestorage.googleapis.com/v0/b/arkids-da65c.appspot.com/o/audio%2Fhogar%2Ftostadora_p.mp3?alt=media&token=f78b8740-7bb7-4f6e-94b0-c706b6fd8283',
            'https://firebasestorage.googleapis.com/v0/b/arkids-da65c.appspot.com/o/audio%2Fhogar%2Ftostadora_r.mp3?alt=media&token=4e0a2ac0-1432-429a-baa4-03f02053ba93'
        ],
        claves: [
            'pan',
            'tosta'
        ],
        escala : '0.25 0.25 0.25'
    },
    {
        nombre : 'trapeador',
        rutas : [

            'https://firebasestorage.googleapis.com/v0/b/arkids-da65c.appspot.com/o/hogar%2Ftrapeador.glb?alt=media&token=cf738ae6-b703-4c82-9318-76f2cb8b77fe',
            'https://firebasestorage.googleapis.com/v0/b/arkids-da65c.appspot.com/o/audio%2Fhogar%2Ftrapeador_p.mp3?alt=media&token=a599936c-2d3c-4bf0-8422-f39d33c4e357',
            'https://firebasestorage.googleapis.com/v0/b/arkids-da65c.appspot.com/o/audio%2Fhogar%2Ftrapeador_r.mp3?alt=media&token=19d9e8a5-c199-4b2f-9341-fae94084dea9'
        ],
        claves: [
            'mojado',
        ],
        escala : '0.2 0.2 0.2'
    }
    
]
