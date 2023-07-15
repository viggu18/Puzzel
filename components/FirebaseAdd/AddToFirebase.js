import { View, Text,Button } from 'react-native';
import React from 'react';
import firebase from '../../firebase';
const db = firebase.firestore();

const list = [
    {
            Name: 'Puzzle Dester',
            Image: {
                img1: 'https://fdn2.gsmarena.com/vv/pics/oppo/oppo-f11-pro-10.jpg',
                img2: 'https://fdn2.gsmarena.com/vv/pics/oppo/oppo-f11-pro-3.jpg',
                img3: 'https://fdn2.gsmarena.com/vv/pics/oppo/oppo-f11-pro-l2.jpg',
            },
            Network: 'HSPA 42.2/5.76 Mbps, LTE-A (2CA) Cat7 300/50 Mbps',
            
            Weight: '180g',
            Glass: 'GGlass front',
            Display:'IPS LCD, 1080 x 2340 pixels, 19.5:9 ratio',
            Os: 'Android 9.0 (Pie), ColorOS 6',
            Chipset: 'Mediatek MT6771 Helio P70 (12nm)',
            Gpu: 'Mali-G72 MP3',
            Memory: {
                option1: '6GB',
                option2: '8GB',
                option3: '12GB'
            },
            Storage: {
                option1: '64GB', 
                option2: '128GB', 
                option3: '256GB', 
                option4: '512GB'
            },
            BackCamera: '48 MP, f/1.8, (wide), 1/2.25", 0.8µm, PDAF 5 MP, f/2.4, (depth)',
            FrontCamera: 'Motorized pop-up 16 MP, f/2.0, 26mm (wide), 1/3.06", 1.0µm',
            Sound: 'Loudspeaker:	Yes 3.5mm jack: Yes',
            Battery: 'Li-Po 4000 mAh, non-removable',
            Colors: 'Thunder Black, Aurora Green',
            Price: '15200',
            Rating: '4.2'
        },
        {
            Name: 'Puzzle Hazard',
            Image: {
                img1: 'https://fdn2.gsmarena.com/vv/pics/huawei/huawei-y9-prime-2019-1.jpg',
                img2: 'https://fdn2.gsmarena.com/vv/pics/huawei/huawei-y9-prime-2019-2.jpg',
                img3: 'https://fdn2.gsmarena.com/vv/pics/huawei/huawei-y9-prime-2019-3.jpg',
            },
            Network: 'HSPA 42.2/5.76 Mbps, LTE-A (2CA) Cat12 600/50 Mbps',
           
            Weight: '210g',
            Glass: 'Gorilla Glass 6',
            Display:'Super Amoled HDR, 1080 x 2340 pixels, 19.5:9 ratio ',
            Os: 'Android 9.0 (Pie), upgradable to Android 10, Magic UI 2.1',
            Chipset: 'Exynos 2100 ',
            Gpu: 'Mali-G51 MP4',
            Memory: {
                option1: '6GB',
                option2: '8GB',
                option3: '12GB',
                option4: '16GB'
            },
            Storage: {
               
                option1: '128GB', 
                option2: '256GB', 
                option3: '512GB'
            },
            BackCamera: '68 MP, f/1.8, (wide), PDAF 8 MP, f/2.4, 13mm (ultrawide) 2 MP, f/2.4, (depth)',
            FrontCamera: 'Motorized pop-up 16 MP, f/2.0',
            Sound: 'Loudspeaker:	Yes 3.5mm jack: Yes',
            Battery: 'Li-Po 4000 mAh, non-removable',
            Colors: 'Emerald Green, Midnight Black, Sapphire Blue',
            Price: '18800',
            Rating: '4.4'
        },
        {
            Name: 'Puzzle More',
            Image: {
                img1: 'https://fdn2.gsmarena.com/vv/pics/huawei/huawei-y9-prime-2019-1.jpg',
                img2: 'https://fdn2.gsmarena.com/vv/pics/huawei/huawei-y9-prime-2019-2.jpg',
                img3: 'https://fdn2.gsmarena.com/vv/pics/huawei/huawei-y9-prime-2019-3.jpg',
            },
            Network: 'HSPA 42.2/5.76 Mbps',
           
            Weight: '200g',
            Glass: 'Gorilla Glass ',
            Display:'Super Amoled HDR, 1080 x 2340 pixels ',
            Os: 'Android 9.0 (Pie), upgradable to Android 10, Magic UI 2.1',
            Chipset: 'Exynos  ',
            Gpu: 'Mali-G51 MP4',
            Memory: {
                option1: '6GB',
                option2: '8GB',
                option3: '12GB',
                option4: '16GB'
            },
            Storage: {
               
                option1: '128GB', 
                option2: '256GB', 
                option3: '512GB'
            },
            BackCamera: '16 MP, f/1.8, (wide), PDAF 8 MP, f/2.4, 13mm (ultrawide) 2 MP, f/2.4, (depth)',
            FrontCamera: 'Motorized pop-up 16 MP, f/2.0',
            Sound: 'Loudspeaker:	Yes 3.5mm jack: Yes',
            Battery: 'Li-Po 4000 mAh, non-removable',
            Colors: 'Emerald Green, Midnight Black, Sapphire Blue',
            Price: '19800',
            Rating: '4.1'
        },
        {
            Name: 'Puzzle Dex',
            Image: {
                img1: 'https://fdn2.gsmarena.com/vv/pics/huawei/huawei-y9-prime-2019-1.jpg',
                img2: 'https://fdn2.gsmarena.com/vv/pics/huawei/huawei-y9-prime-2019-2.jpg',
                img3: 'https://fdn2.gsmarena.com/vv/pics/huawei/huawei-y9-prime-2019-3.jpg',
            },
            Network: ' LTE-A (2CA) Cat12 600/50 Mbps',
            
            Weight: '210g',
            Glass: 'Gorilla Glass ',
            Display:'Super Amoled , 1080 x 2340 pixels ',
            Os: 'Android 9.0 (Pie), upgradable to Android 10, Magic UI 2.1',
            Chipset: 'Exynos 2100 ',
            Gpu: 'Mali-G51 MP4',
            Memory: {
                option1: '6GB',
                option2: '8GB',
                option3: '12GB',
                option4: '16GB'
            },
            Storage: {
               
                option1: '128GB', 
                option2: '256GB', 
                option3: '512GB'
            },
            BackCamera: '16 MP, f/1.8, (wide), PDAF 8 MP, f/2.4, 13mm (ultrawide) 2 MP, f/2.4, (depth)',
            FrontCamera: 'Motorized pop-up 16 MP, f/2.0',
            Sound: 'Loudspeaker:	Yes 3.5mm jack: Yes',
            Battery: 'Li-Po 4000 mAh, non-removable',
            Colors: 'Emerald Green, Midnight Black, Sapphire Blue',
            Price: '21500',
            Rating: '4.2'
        },
        {
            Name: 'Puzzle Max',
            Image: {
                img1: 'https://fdn2.gsmarena.com/vv/pics/vivo/vivo-v17-pro-vivo-1909-pd1931f-1.jpg',
                img2: 'https://fdn2.gsmarena.com/vv/pics/vivo/vivo-v17-pro-vivo-1909-pd1931f-2.jpg',
                img3: 'https://fdn.gsmarena.com/imgroot/reviews/19/vivo-v17-pro/lifestyle/-1024w2/gsmarena_010.jpg',
            },
            Network: 'HSPA 42.2/5.76 Mbps, LTE-A',
            
            Weight: '201g',
            Glass: 'Glass front (Gorilla Glass 6), glass back (Gorilla Glass 6), plastic frame',
            Display:'Super AMOLED, 1080 x 2400 pixels, 20:9 ratio (~409 ppi density)',
            Os: 'Android 9.0 (Pie), Funtouch 9.1',
            Chipset: 'Qualcomm SDM675 Snapdragon 675 (11 nm)',
            Gpu: 'Adreno 612',
            Memory: {
                option1: '6GB',
                option2: '8GB',
                option3: '12GB'
            },
            Storage: {
                option1: '64GB', 
                option2: '128GB', 
                option3: '256GB', 
                option4: '512GB'
            },
            BackCamera: '48 MP, f/1.8, 26mm (wide), 1/2.0, PDAF8 MP, f/2.2, 16mm, 1/4.0",13 MP, 1/3.1,2 MP, f/2.4,',
            FrontCamera: 'Motorized pop-up 32 MP, f/2.0, 26mm (wide), 1/2.8", 0.8µm',
            Sound: 'Loudspeaker:	Yes 3.5mm jack: Yes',
            Battery: 'Li-Po 4100 mAh, non-removable',
            Colors: 'Crystal Black, Crystal Sky, Midnight Ocean',
            Price: '22800',
            Rating: '4.4'
        },
        {
            Name: 'Puzzle Dark',
            Image: {
                img1: 'https://fdn2.gsmarena.com/vv/pics/huawei/huawei-y9-prime-2019-1.jpg',
                img2: 'https://fdn2.gsmarena.com/vv/pics/huawei/huawei-y9-prime-2019-2.jpg',
                img3: 'https://fdn2.gsmarena.com/vv/pics/huawei/huawei-y9-prime-2019-3.jpg',
            },
            Network: 'HSWU 42.2/5.76 Mbps, LTE-A (2CA) Cat12 600/50 Mbps',
            
            Weight: '190g',
            Glass: 'Gorilla Glass 3 ',
            Display:'Super Amoled HDR, 1080 x 2340 pixels, 19.5:9 ratio ',
            Os: 'Android 9.0 (Pie), upgradable to Android 10',
            Chipset: 'Exynos 3000 ',
            Gpu: 'Mali-G51 MP4',
            Memory: {
                option1: '6GB',
                option2: '8GB',
                option3: '12GB',
                option4: '16GB'
            },
            Storage: {
               
                option1: '128GB', 
                option2: '256GB', 
                option3: '512GB'
            },
            BackCamera: '16 MP, f/1.8, (wide), PDAF 8 MP, f/2.4, 13mm (ultrawide) 2 MP, f/2.4, (depth)',
            FrontCamera: 'Motorized pop-up 16 MP, f/2.0',
            Sound: 'Loudspeaker:	Yes 3.5mm jack: Yes',
            Battery: 'Li-Po 5000 mAh, non-removable',
            Colors: 'Emerald Green, Midnight Black, Sapphire Blue',
            Price: '23900',
            Rating: '4.4'
        },
        {
            Name: 'Puzzle Konoha',
            Image: {
                img1: 'https://fdn2.gsmarena.com/vv/pics/asus/asus-zenfone7-pro-zs670ks-zs671ks-1.jpg',
                img2: 'https://fdn2.gsmarena.com/vv/pics/asus/asus-zenfone7-pro-zs670ks-zs671ks-2.jpg',
                img3: 'https://fdn2.gsmarena.com/vv/pics/asus/asus-zenfone7-002.jpg',
            },
            Network: 'HSPA 42.2/5.76 Mbps, LTE-A (5CA) Cat19 1800/150 Mbps, 5G 3.6 Gbps DL',
           
            Weight: '209g',
            Glass: 'Gorilla Glass 3',
            Display:' Amoled HDR, 1080 x 2400 pixels, 20:9 ratio (~395 ppi density)',
            Os: 'Android 10, upgradable to Android 12, ZenUI',
            Chipset: 'Qualcomm SM8250 Snapdragon 865 5G+ (7 nm+)',
            Gpu: 'Adreno 650',
            Memory: {
                option1: '8GB',
                option2: '12GB',
                option3: '16GB'
            },
            Storage: {
                option1: '64GB', 
                option2: '128GB', 
                option3: '256GB', 
                option4: '512GB',
                option4: '1 TB'
            },
            BackCamera: '64 MP, f/1.8, 26mm (wide), 1/1.72", 0.8µm, PDAF, OIS 8 MP, f/2.4, OIS, 3x optical zoom',
            FrontCamera: 'Motorized flip-up main camera module',
            Sound: 'stereo speakers:	Yes 3.5mm jack: Yes',
            Battery: 'Li-Po 5000 mAh, non-removable',
            Colors: 'Aurora Black, Pastel White',
            Price: '24500',
            Rating: '4.7'
        },
        {
            Name: 'Puzzle Madara',
            Image: {
                img1: 'https://fdn2.gsmarena.com/vv/pics/honor/honor-9x-pro-00.jpg',
                img2: 'https://fdn2.gsmarena.com/vv/pics/honor/honor-9x-pro-01.jpg',
                img3: 'https://fdn2.gsmarena.com/vv/pics/honor/honor-9x-pro-02.jpg',
            },
            Network: 'HSPA 42.2/5.76 Mbps, LTE-A (2CA) Cat12 600/50 Mbps',
           
            Weight: '189g',
            Glass: 'IPS LCD',
            Display:'Super Amoled , 1080 x 2340 pixels',
            Os: ' Android 10, EMUI 9.1, no Google Play Services',
            Chipset: 'Kirin 810 (7 nm)',
            Gpu: 'Mali-G52 MP6',
            Memory: {
                option1: '6GB',
                option2: '8GB',
                option3: '12GB'
            },
            Storage: {
                option1: '64GB', 
                option2: '128GB', 
                option3: '256GB', 
                option4: '512GB'
            },
            BackCamera: '48 MP, f/1.8, (wide), 1/2.0", 0.8µm, PDAF 8 MP, f/2.4, 120˚ (ultrawide)',
            FrontCamera: 'Motorized pop-up 16 MP, f/2.2, 26mm (wide), 1/3.06", 1.0µm',
            Sound: 'Loudspeaker:	Yes 4.5mm jack: Yes',
            Battery: 'Li-Po 4000 mAh, non-removable',
            Colors: 'Midnight Black, Phantom Purple',
            Price: '25000',
            Rating: '4.5'
        },
        {
            Name: 'Puzzle Infinity',
            Image: {
                img1: 'https://fdn2.gsmarena.com/vv/pics/infinix/infinix-s5-pro-01.jpg',
                img2: 'https://fdn2.gsmarena.com/vv/pics/infinix/infinix-s5-pro-02.jpg',
                img3: 'https://fdn2.gsmarena.com/vv/pics/infinix/infinix-s5-pro-03.jpg',
            },
            Network: 'HSPA 42.2/5.76 Mbps, LTE Cat4 150/50 Mbps',
           
            Weight: '195g',
            Glass: 'Glass front',
            Display:'Full HD display, 1080 x 2340 pixels, 19.5:9 ratio ',
            Os: 'Android 10',
            Chipset: 'Mediatek MT6765 (12nm)',
            Gpu: 'PowerVR GE8320',
            Memory: {
                option1: '6GB',
                option2: '8GB',
                option3: '12GB'
            },
            Storage: {
                option1: '64GB', 
                option2: '128GB', 
                option3: '256GB', 
                option4: '512GB'
            },
            BackCamera: '16 MP, f/1.8, (wide), PDAF 2 MP, (depth)',
            FrontCamera: 'Motorized pop-up 32 MP, (wide)',
            Sound: 'Loudspeaker:	Yes 3.5mm jack: Yes',
            Battery: 'Li-Po 4800 mAh, non-removable',
            Colors: 'Black, Quetzal Cyan',
            Price: '26500',
            Rating: '4.3'
        },
        {
            Name: 'Puzzle Mercury',
            Image: {
                img1: 'https://fdn2.gsmarena.com/vv/pics/vivo/vivo-nex3-1.jpg',
                img2: 'https://fdn2.gsmarena.com/vv/pics/vivo/vivo-nex3-2.jpg',
                img3: 'https://fdn.gsmarena.com/imgroot/reviews/19/vivo-nex-3-5g/lifestyle/-1024w2/gsmarena_009.jpg',
            },
            Network: 'HSPA 42.2/5.76 Mbps, LTE-A (5CA) Cat18 1200/150 Mbps',
            
            Weight: '210.3g',
            Glass: 'Glass front, glass back',
            Display:'Super Amoled HDR 10, 1080 x 2256 pixels (~363 ppi density)',
            Os: 'Android 9.0 (Pie), Funtouch 9.1',
            Chipset: 'Qualcomm SM8150 Snapdragon 888+ (7 nm)',
            Gpu: 'Adreno 640 ',
            Memory: {
                option1: '6GB',
                option2: '8GB',
                option3: '12GB'
            },
            Storage: {
                option1: '64GB', 
                option2: '128GB', 
                option3: '256GB', 
                option4: '512GB'
            },
            BackCamera: '64 MP, f/1.8, (wide), 1/1.72", 0.8µm, PDAF 13 MP, f/2.5',
            FrontCamera: 'Motorized pop-up 16 MP, f/2.1, 26mm (wide), 1/3.06", 1.0µm',
            Sound: '32-bit/192kHz audio:	Yes 3.5mm jack: Yes',
            Battery: 'Li-Po 4200 mAh, non-removable',
            Colors: 'Black, Blue',
            Price: '27900',
            Rating: '4.8'
        },
        {
            Name: 'Puzzle Beta',
            Image: {
                img1: 'https://fdn2.gsmarena.com/vv/pics/huawei/huawei-y9-prime-2019-1.jpg',
                img2: 'https://fdn2.gsmarena.com/vv/pics/huawei/huawei-y9-prime-2019-2.jpg',
                img3: 'https://fdn2.gsmarena.com/vv/pics/huawei/huawei-y9-prime-2019-3.jpg',
            },
            Network: ' 42.2/5.76 Mbps, LTE-A (2CA) Cat12 600/50 Mbps',
            
            Weight: '211g',
            Glass: 'Gorilla Glass 5',
            Display:'Super Amoled HDR, 1080 x 2340 pixels, 19.5:9 ratio ',
            Os: 'Android 9.0 (Pie), upgradable to Android 10, Magic UI 2.1',
            Chipset: 'Exynos 1000 ',
            Gpu: 'Mali-G51 MP4',
            Memory: {
                option1: '6GB',
                option2: '8GB',
                option3: '12GB',
                option4: '16GB'
            },
            Storage: {
               
                option1: '128GB', 
                option2: '256GB', 
                option3: '512GB'
            },
            BackCamera: '40 MP, f/1.8, (wide), PDAF 16 MP, f/2.4',
            FrontCamera: 'Motorized pop-up 16 MP, f/2.0',
            Sound: 'Loudspeaker:	Yes 3.5mm jack: Yes',
            Battery: 'Li-Po 4000 mAh, non-removable',
            Colors: 'Emerald Green, Midnight Black, Sapphire Blue',
            Price: '28800',
            Rating: '4.4'
        },
        {
            Name: 'Puzzle Alpha',
            Image: {
                img1: 'https://fdn2.gsmarena.com/vv/pics/oppo/oppo-reno-10x-zoom-2.jpg',
                img2: 'https://fdn2.gsmarena.com/vv/pics/oppo/oppo-reno-10x-zoom-4.jpg',
                img3: 'https://fdn2.gsmarena.com/vv/pics/oppo/oppo-reno-10x-zoom-3.jpg',
            },
            Network: 'HSPA 42.2/5.76 Mbps, LTE-A (5CA) Cat18 1200/150 Mbps',
            Weight: '200g',
            Glass: 'Gorilla Glass 8',
            Display:' Amoled HDR,1080 x 2340 pixels, 19.5:9 ratio (~387 ppi density)',
            Os: 'Android 9.0 (Pie), upgradable to Android 11, ColorOS 11',
            Chipset: 'Qualcomm SM8150 Snapdragon 855 (7 nm)',
            Gpu: 'Adreno 640',
            Memory: {
                option1: '6GB',
                option2: '8GB',
                option3: '12GB'
            },
            Storage: {
                option1: '64GB', 
                option2: '128GB', 
                option3: '256GB', 
                option4: '512GB'
            },
            BackCamera: '70 MP, f/1.7, 26mm (wide), 1/2.0", 0.8µm, Laser AF, OIS 13 MP, f/3.0, PDAF OIS, 5x optical zoom',
            FrontCamera: 'Motorized pop-up 16 MP, f/2.0, 26mm (wide), 1/3.06", 1.0µm',
            Sound: 'Loudspeaker:	Yes 3.5mm jack: Yes',
            Battery: 'Li-Po 4000 mAh, non-removable',
            Colors: 'Ocean Green, Jet Black, Mist Pink, Ocean Blue',
            Price: '29500',
            Rating: '4.6'
        },
        {
            Name: 'Puzzle Prexy',
            Image: {
                img1: 'https://fdn2.gsmarena.com/vv/pics/oppo/oppo-k3-1.jpg',
                img2: 'https://fdn2.gsmarena.com/vv/pics/oppo/oppo-k3-10.jpg',
                img3: 'https://fdn2.gsmarena.com/vv/pics/oppo/oppo-k3-2.jpg',
            },
            Network: 'HSPA 42.2/5.76 Mbps, LTE-A',
            
            Weight: '181g',
            Glass: 'Corning Gorilla Glass ',
            Display:'AMOLED, 1080 x 2340 pixels, 19.5:9 ratio (~394 ppi density)',
            Os: 'Android 9.0 (Pie), ColorOS 6',
            Chipset: 'Qualcomm SDM710 Snapdragon 710 (10 nm)',
            Gpu: 'Adreno 616',
            Memory: {
                option1: '6GB',
                option2: '8GB',
                option3: '12GB'
            },
            Storage: {
                option1: '128GB', 
                option2: '256GB', 
                option3: '512GB', 
                option4: '1 TB'
            },
            BackCamera: '16 MP, f/1.7, 1/2.5", 1.12µm, PDAF',
            FrontCamera: 'Motorized pop-up 16 MP, f/2.0, 26mm (wide), 1/3.06", 1.0µm',
            Sound: 'Loudspeaker:	Yes 3.5mm jack: Yes',
            Battery: 'Li-Po 3765 mAh, non-removable',
            Colors: 'Black, Nebula Purple, Morning White',
            Price: '29600',
            Rating: '4.5'
        },
        {
            Name: 'Puzzle Haze',
            Image: {
                img1: 'https://fdn2.gsmarena.com/vv/pics/vivo/vivo-v15-pro-ruby-red2.jpg',
                img2: 'https://fdn2.gsmarena.com/vv/pics/vivo/vivo-v15-pro-ruby-red1.jpg',
                img3: 'https://fdn2.gsmarena.com/vv/pics/vivo/vivo-v15-pro-coral-red.jpg',
            },
            Network: 'HSPA 42.2/5.76 Mbps, LTE-A (2CA) Cat12 600/50 Mbps',
           
            Weight: '123g',
            Glass: 'Gorilla Glass 6',
            Display:'Super Amoled HDR, 080 x 2340 pixels, 19.5:9 ratio (~404 ppi density)',
            Os: 'Android 9.0 (Pie), Funtouch 9',
            Chipset: 'Qualcomm SDM675',
            Gpu: 'Adreno 788',
            Memory: {
                option1: '6GB',
                option2: '8GB',
                option3: '12GB'
            },
            Storage: {
                option1: '64GB', 
                option2: '128GB', 
                option3: '256GB', 
                option4: '512GB'
            },
            BackCamera: '48 MP, f/1.8, (wide), 1/2.0", 0.8µm, PDAF 8 MP, f/2.2, 13mm (ultrawide)',
            FrontCamera: 'Motorized pop-up 32 MP, f/2.0, 26mm (wide), 1/2.8", 0.8µm',
            Sound: 'Loudspeaker:	Yes 3.5mm jack: Yes',
            Battery: 'Li-Po 5700 mAh, non-removable',
            Colors: 'Topaz Blue',
            Price: '29800',
            Rating: '4.5'
        },
        {
            Name: 'Puzzle Zeta',
            Image: {
                img1: 'https://fdn2.gsmarena.com/vv/pics/huawei/huawei-y9-prime-2019-1.jpg',
                img2: 'https://fdn2.gsmarena.com/vv/pics/huawei/huawei-y9-prime-2019-2.jpg',
                img3: 'https://fdn2.gsmarena.com/vv/pics/huawei/huawei-y9-prime-2019-3.jpg',
            },
            Network: 'HSPA 42.2/5.76 Mbps, LTE-A (2CA) Cat12 600/50 Mbps',
            
            Weight: '176g',
            Glass: 'Gorilla Glass 5 ',
            Display:'Super Amoled HDR, 1080 x 2340 pixels, 19.5:9 ratio ',
            Os: 'Android 9.0 (Pie), upgradable to Android 10, Magic UI 2.1',
            Chipset: 'Exynos 100 ',
            Gpu: 'Mali-G51 MP4',
            Memory: {
                option1: '6GB',
                option2: '8GB',
                option3: '12GB',
                option4: '16GB'
            },
            Storage: {
               
                option1: '128GB', 
                option2: '256GB', 
                option3: '512GB'
            },
            BackCamera: '65 MP, f/1.8, (wide), PDAF 8 MP, f/2.4, 13mm (ultrawide) 2 MP, f/2.4, (depth)',
            FrontCamera: 'Motorized pop-up 16 MP, f/2.0',
            Sound: 'Loudspeaker:	Yes 3.5mm jack: Yes',
            Battery: 'Li-Po 4000 mAh, non-removable',
            Colors: 'Emerald Green, Midnight Black, Sapphire Blue',
            Price: '30000',
            Rating: '4.4'
        }
    ]

export default function AddTodb (){

  const addComponent = () => {
      console.log('FunctionStart')
    list.map((item)=>{
    db.collection("puzzle/stockDesigns/30000").doc(item.Name).set(item).then(() => {
        console.log("Document successfully written!");
    }).catch((error) => {
        console.log(error)
    })
  })
}
    
addComponent()

  return (
    <>
    <Text>Header</Text>
          <Button onPress={()=>addComponent} title='Update'/>
    </>
  );
}

