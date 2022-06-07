jabs = [
    {
        "vac": "Oxford-AstraZeneca",
        "date": 16546047
    },
    {
        "vac": "Moderna",
        "date": 1634604732
    }
];

function TH(jabs) {
    for (let i = 0; i < jabs.length; i++) {
        //console.log(jabs[i]["vac"], ["CoronaVac(Sinovac)", "Oxford-AstraZeneca", "Pfizer-BioNTech", "Moderna", "Sinopharm BIBP", "Sputnik V", "Covaxin", "Novavax", "Medigen", "Turkovac", "Sputnik Light", "Janssen"].includes(jabs[i]["vac"]));
        if ((jabs[i]["vac"] == "Sputnik Light" || jabs[i]["vac"] == "Janssen" )&&jabs[i]["date"] < Math.floor(Date.now() / 1000) - 1209600) {
            return {
                "status": "Fully Vaccinated",
                "text": ""
            };
        }
        else if (["CoronaVac(Sinovac)", "Oxford-AstraZeneca", "Pfizer-BioNTech", "Moderna", "Sinopharm BIBP", "Sputnik V", "Covaxin", "Novavax", "Medigen", "Turkovac"].includes(jabs[i]["vac"])) {
            var min_interval;
            if (["CoronaVac(Sinovac)"].includes(jabs[i]["vac"])) {
                min_interval = 2;
            } else if (["Pfizer-BioNTech", "Sinopharm BIBP", "Sputnik V", "Novavax"].includes(jabs[i]["vac"])) {
                min_interval = 3;
            } else {
                min_interval = 4;
            }
            //console.log(jabs[i]["vac"],"min_interval",min_interval,i,jabs.length - 1);
            for (let j = jabs.length - 1; j > i; j--) {
                //console.log("Here", j, ["CoronaVac(Sinovac)", "Oxford-AstraZeneca", "Pfizer-BioNTech", "Moderna", "Sinopharm BIBP", "Sputnik V", "Covaxin", "Novavax", "Medigen", "Turkovac", "Sputnik Light", "Janssen"].includes(jabs[j]["vac"]),jabs[j]["date"] - jabs[i]["date"] > min_interval * 604800, jabs[j]["date"] <= Math.floor(Date.now() / 1000) - 1209600, jabs[j]["date"], Math.floor(Date.now() / 1000) - 1209600);
                if (["CoronaVac(Sinovac)", "Oxford-AstraZeneca", "Pfizer-BioNTech", "Moderna", "Sinopharm BIBP", "Sputnik V", "Covaxin", "Novavax", "Medigen", "Turkovac", "Sputnik Light", "Janssen"].includes(jabs[j]["vac"]) && jabs[j]["date"] - jabs[i]["date"] > min_interval * 604800 && jabs[j]["date"] <= Math.floor(Date.now() / 1000) - 1209600) {
                    return {
                        "status": "Fully Vaccinated",
                        "text": ""
                    };
                }
            }
        }

    }
    return {
        "status": "Non-Fully Vaccinated",
        "text": "You need 2/1 recognized jabs"
    };

}

function US(jabs) {
    for (let i = 0; i < jabs.length; i++) {
        //console.log(jabs[i]["vac"], ["CoronaVac(Sinovac)", "Oxford-AstraZeneca", "Pfizer-BioNTech", "Moderna", "Sinopharm BIBP", "Sputnik V", "Covaxin", "Novavax", "Medigen", "Turkovac", "Sputnik Light", "Janssen"].includes(jabs[i]["vac"]));
        if ((jabs[i]["vac"] == "Convidecia" || jabs[i]["vac"] == "Janssen" )&&jabs[i]["date"] < Math.floor(Date.now() / 1000) - 1209600) {
            return {
                "status": "Fully Vaccinated",
                "text": ""
            };
        }
        else if(["Pfizer-BioNTech","Moderna","Oxford-AstraZeneca","Covaxin","Covishield","Sinopharm BIBP","CoronaVac(Sinovac)","Novavax","Covovax","Medicago"].includes(jabs[i]["vac"])){
            for (let j = jabs.length - 1; j > i; j--) {
                if(["Pfizer-BioNTech","Moderna","Oxford-AstraZeneca","Covaxin","Covishield","Sinopharm BIBP","CoronaVac(Sinovac)","Novavax","Covovax","Medicago","Convidecia","Janssen"].includes(jabs[j]["vac"]) && jabs[j]["date"] <= Math.floor(Date.now() / 1000) - 1209600 && (jabs[i]["vac"] == jabs[j]["vac"]) || (jabs[j]["date"] - jabs[i]["date"] > 17*86400)){
                    return {
                        "status": "Fully Vaccinated",
                        "text": ""
                    };
                }
            }
        }

    }
    return {
        "status": "Non-Fully Vaccinated",
        "text": "You need 2/1 recognized jabs"
    };

}

function CA(jabs) {
    for (let i = 0; i < jabs.length; i++) {
        if ((jabs[i]["vac"] == "Janssen" )&&jabs[i]["date"] < Math.floor(Date.now() / 1000) - 1209600) {
            return {
                "status": "Fully Vaccinated",
                "text": ""
            };
        }
        else if(["Oxford-AstraZeneca","Covaxin","Medicago","Moderna","Novavax","Pfizer-BioNTech","Sinopharm BIBP","CoronaVac(Sinovac)"].includes(jabs[i]["vac"])){
            for (let j = jabs.length - 1; j > i; j--) {
                if(["Oxford-AstraZeneca","Covaxin","Medicago","Moderna","Novavax","Pfizer-BioNTech","Sinopharm BIBP","CoronaVac(Sinovac)","Janssen"].includes(jabs[j]["vac"]) && jabs[j]["date"] <= Math.floor(Date.now() / 1000) - 1209600 ){
                    return {
                        "status": "Fully Vaccinated",
                        "text": ""
                    };
                }
            }
        }

    }
    return {
        "status": "Non-Fully Vaccinated",
        "text": "You need 2/1 recognized jabs"
    };

}

//console.log(TH(jabs));