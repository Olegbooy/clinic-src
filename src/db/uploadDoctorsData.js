import doctorsData  from "./dr-isaenko-clinic-default-rtdb-export-2.json" assert { type: 'json' };
import fs from 'fs';


function transformDoctorData(data) {
    return data.map((doctor, index) => {
        return {
            ...doctor,
            aboutDoctor: `team:aboutDoctor:${index}`
        };
    });
}

const transformedDoctorsData = transformDoctorData(doctorsData);

fs.writeFileSync('transformedDoctorsData.json', JSON.stringify(transformedDoctorsData, null, 2));

console.log(JSON.stringify(transformedDoctorsData, null, 2));