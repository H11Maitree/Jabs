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
        //console.log(jabs[i]["vac"], ["CoronaVac(Sinovac)", "Oxford-AstraZeneca", "Pfizer-BioNTech", "Moderna", "Sinopharm BIBP", "Sputnik V", "Covaxin", "Novavax(Covovax)", "Medigen", "Turkovac", "Sputnik Light", "Janssen"].includes(jabs[i]["vac"]));
        if ((jabs[i]["vac"] == "Sputnik Light" || jabs[i]["vac"] == "Janssen") && jabs[i]["date"] <= Math.floor(Date.now() / 1000) - 1209600) {
            return {
                "status": "Fully Vaccinated",
                "text": ""
            };
        }
        else if (["CoronaVac(Sinovac)", "Oxford-AstraZeneca", "Pfizer-BioNTech", "Moderna", "Sinopharm BIBP", "Sputnik V", "Covaxin", "Novavax(Covovax)", "Medigen", "Turkovac"].includes(jabs[i]["vac"])) {
            var min_interval;
            if (["CoronaVac(Sinovac)"].includes(jabs[i]["vac"])) {
                min_interval = 2;
            } else if (["Pfizer-BioNTech", "Sinopharm BIBP", "Sputnik V", "Novavax(Covovax)"].includes(jabs[i]["vac"])) {
                min_interval = 3;
            } else {
                min_interval = 4;
            }
            //console.log(jabs[i]["vac"],"min_interval",min_interval,i,jabs.length - 1);
            for (let j = jabs.length - 1; j > i; j--) {
                //console.log("Here", j, ["CoronaVac(Sinovac)", "Oxford-AstraZeneca", "Pfizer-BioNTech", "Moderna", "Sinopharm BIBP", "Sputnik V", "Covaxin", "Novavax(Covovax)", "Medigen", "Turkovac", "Sputnik Light", "Janssen"].includes(jabs[j]["vac"]),jabs[j]["date"] - jabs[i]["date"] > min_interval * 604800, jabs[j]["date"] <= Math.floor(Date.now() / 1000) - 1209600, jabs[j]["date"], Math.floor(Date.now() / 1000) - 1209600);
                if (["CoronaVac(Sinovac)", "Oxford-AstraZeneca", "Pfizer-BioNTech", "Moderna", "Sinopharm BIBP", "Sputnik V", "Covaxin", "Novavax(Covovax)", "Medigen", "Turkovac", "Sputnik Light", "Janssen"].includes(jabs[j]["vac"]) && jabs[j]["date"] - jabs[i]["date"] >= min_interval * 604800 && jabs[j]["date"] <= Math.floor(Date.now() / 1000) - 1209600) {
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
        //console.log(jabs[i]["vac"], ["CoronaVac(Sinovac)", "Oxford-AstraZeneca", "Pfizer-BioNTech", "Moderna", "Sinopharm BIBP", "Sputnik V", "Covaxin", "Novavax(Covovax)", "Medigen", "Turkovac", "Sputnik Light", "Janssen"].includes(jabs[i]["vac"]));
        if ((jabs[i]["vac"] == "Convidecia" || jabs[i]["vac"] == "Janssen") && jabs[i]["date"] < Math.floor(Date.now() / 1000) - 1209600) {
            return {
                "status": "Fully Vaccinated",
                "text": ""
            };
        }
        else if (["Pfizer-BioNTech", "Moderna", "Oxford-AstraZeneca", "Covaxin", "Covishield", "Sinopharm BIBP", "CoronaVac(Sinovac)", "Novavax(Covovax)", "Medicago"].includes(jabs[i]["vac"])) {
            for (let j = jabs.length - 1; j > i; j--) {
                if (["Pfizer-BioNTech", "Moderna", "Oxford-AstraZeneca", "Covaxin", "Covishield", "Sinopharm BIBP", "CoronaVac(Sinovac)", "Novavax(Covovax)", "Medicago", "Convidecia", "Janssen"].includes(jabs[j]["vac"]) && jabs[j]["date"] <= Math.floor(Date.now() / 1000) - 1209600 && (jabs[i]["vac"] == jabs[j]["vac"] || jabs[j]["date"] - jabs[i]["date"] >= 17 * 86400)) {
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
        if ((jabs[i]["vac"] == "Janssen") && jabs[i]["date"] < Math.floor(Date.now() / 1000) - 1209600) {
            return {
                "status": "Fully Vaccinated",
                "text": ""
            };
        }
        else if (["Oxford-AstraZeneca", "Covaxin", "Medicago", "Moderna", "Novavax(Covovax)", "Pfizer-BioNTech", "Sinopharm BIBP", "CoronaVac(Sinovac)"].includes(jabs[i]["vac"])) {
            for (let j = jabs.length - 1; j > i; j--) {
                if (["Oxford-AstraZeneca", "Covaxin", "Medicago", "Moderna", "Novavax(Covovax)", "Pfizer-BioNTech", "Sinopharm BIBP", "CoronaVac(Sinovac)", "Janssen"].includes(jabs[j]["vac"]) && jabs[j]["date"] <= Math.floor(Date.now() / 1000) - 1209600) {
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

function AU(jabs) {
    for (let i = 0; i < jabs.length; i++) {
        //console.log(jabs[i]["vac"], ["CoronaVac(Sinovac)", "Oxford-AstraZeneca", "Pfizer-BioNTech", "Moderna", "Sinopharm BIBP", "Sputnik V", "Covaxin", "Novavax(Covovax)", "Medigen", "Turkovac", "Sputnik Light", "Janssen"].includes(jabs[i]["vac"]));
        if ((jabs[i]["vac"] == "Janssen") && jabs[i]["date"] <= Math.floor(Date.now() / 1000) - 7 * 86400) {
            return {
                "status": "Fully Vaccinated",
                "text": ""
            };
        }
        else if (["Oxford-AstraZeneca", "Covishield", "Pfizer-BioNTech", "Moderna", "CoronaVac(Sinovac)", "Covaxin", "Sputnik V", "Novavax(Covovax)", "Sinopharm BIBP"].includes(jabs[i]["vac"])) {

            for (let j = jabs.length - 1; j > i; j--) {
                //console.log("Here", j, ["CoronaVac(Sinovac)", "Oxford-AstraZeneca", "Pfizer-BioNTech", "Moderna", "Sinopharm BIBP", "Sputnik V", "Covaxin", "Novavax(Covovax)", "Medigen", "Turkovac", "Sputnik Light", "Janssen"].includes(jabs[j]["vac"]),jabs[j]["date"] - jabs[i]["date"] >= min_interval * 604800, jabs[j]["date"] <= Math.floor(Date.now() / 1000) - 1209600, jabs[j]["date"], Math.floor(Date.now() / 1000) - 1209600);
                if (["Oxford-AstraZeneca", "Covishield", "Pfizer-BioNTech", "Moderna", "CoronaVac(Sinovac)", "Covaxin", "Sputnik V", "Novavax(Covovax)", "Sinopharm BIBP", "Janssen"].includes(jabs[j]["vac"]) && jabs[j]["date"] - jabs[i]["date"] >= 14 * 86400 && jabs[j]["date"] <= Math.floor(Date.now() / 1000) - 7 * 86400) {
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

function JP(jabs) {
    for (let i = 0; i < jabs.length; i++) {
        //console.log(jabs[i]["vac"], ["CoronaVac(Sinovac)", "Oxford-AstraZeneca", "Pfizer-BioNTech", "Moderna", "Sinopharm BIBP", "Sputnik V", "Covaxin", "Novavax(Covovax)", "Medigen", "Turkovac", "Sputnik Light", "Janssen"].includes(jabs[i]["vac"]));
        if ((jabs[i]["vac"] == "Janssen")) {
            return {
                "status": "Fully Vaccinated",
                "text": ""
            };
        }
        else if (["Oxford-AstraZeneca", "Pfizer-BioNTech", "Moderna", "Covaxin", "Novavax(Covovax)"].includes(jabs[i]["vac"])) {

            for (let j = jabs.length - 1; j > i; j--) {
                //console.log("Here", j, ["CoronaVac(Sinovac)", "Oxford-AstraZeneca", "Pfizer-BioNTech", "Moderna", "Sinopharm BIBP", "Sputnik V", "Covaxin", "Novavax(Covovax)", "Medigen", "Turkovac", "Sputnik Light", "Janssen"].includes(jabs[j]["vac"]),jabs[j]["date"] - jabs[i]["date"] >= min_interval * 604800, jabs[j]["date"] <= Math.floor(Date.now() / 1000) - 1209600, jabs[j]["date"], Math.floor(Date.now() / 1000) - 1209600);
                if (["Oxford-AstraZeneca", "Pfizer-BioNTech", "Moderna", "Covaxin", "Novavax(Covovax)"].includes(jabs[j]["vac"])) {
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

function WHO(jabs, activate_time = 0) {
    for (let i = 0; i < jabs.length; i++) {
        if ((jabs[i]["vac"] == "Janssen") && jabs[i]["date"] <= Math.floor(Date.now() / 1000) - activate_time * 86400) {
            return {
                "status": "Fully Vaccinated",
                "text": ""
            };
        } else if (["Oxford-AstraZeneca", "Covishield", "Pfizer-BioNTech", "Moderna", "Novavax(Covovax)", "CoronaVac(Sinovac)", "Sinopharm BIBP", "Covaxin", "Janssen", "Convidecia"].includes(jabs[i]["vac"])) {

            for (let j = jabs.length - 1; j > i; j--) {
                //console.log("Here", j, ["CoronaVac(Sinovac)", "Oxford-AstraZeneca", "Pfizer-BioNTech", "Moderna", "Sinopharm BIBP", "Sputnik V", "Covaxin", "Novavax(Covovax)", "Medigen", "Turkovac", "Sputnik Light", "Janssen"].includes(jabs[j]["vac"]),jabs[j]["date"] - jabs[i]["date"] >= min_interval * 604800, jabs[j]["date"] <= Math.floor(Date.now() / 1000) - 1209600, jabs[j]["date"], Math.floor(Date.now() / 1000) - 1209600);
                if (["Oxford-AstraZeneca", "Covishield", "Pfizer-BioNTech", "Moderna", "Novavax(Covovax)", "CoronaVac(Sinovac)", "Sinopharm BIBP", "Covaxin", "Janssen", "Convidecia"].includes(jabs[j]["vac"]) && jabs[j]["date"] <= Math.floor(Date.now() / 1000) - activate_time * 86400) {
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

function PH(jabs, activate_time = 14) {
    for (let i = 0; i < jabs.length; i++) {
        if ((jabs[i]["vac"] == "Janssen") && jabs[i]["date"] <= Math.floor(Date.now() / 1000) - activate_time * 86400) {
            return {
                "status": "Fully Vaccinated",
                "text": ""
            };
        } else if (["Sputnik V","Oxford-AstraZeneca", "Covishield", "Pfizer-BioNTech", "Moderna", "Novavax(Covovax)", "CoronaVac(Sinovac)", "Sinopharm BIBP", "Covaxin", "Janssen", "Convidecia"].includes(jabs[i]["vac"])) {

            for (let j = jabs.length - 1; j > i; j--) {
                //console.log("Here", j, ["CoronaVac(Sinovac)", "Oxford-AstraZeneca", "Pfizer-BioNTech", "Moderna", "Sinopharm BIBP", "Sputnik V", "Covaxin", "Novavax(Covovax)", "Medigen", "Turkovac", "Sputnik Light", "Janssen"].includes(jabs[j]["vac"]),jabs[j]["date"] - jabs[i]["date"] >= min_interval * 604800, jabs[j]["date"] <= Math.floor(Date.now() / 1000) - 1209600, jabs[j]["date"], Math.floor(Date.now() / 1000) - 1209600);
                if (["Sputnik V","Oxford-AstraZeneca", "Covishield", "Pfizer-BioNTech", "Moderna", "Novavax(Covovax)", "CoronaVac(Sinovac)", "Sinopharm BIBP", "Covaxin", "Janssen", "Convidecia"].includes(jabs[j]["vac"]) && jabs[j]["date"] <= Math.floor(Date.now() / 1000) - activate_time * 86400) {
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

function NZ(jabs, activate_time = 0) {
    for (let i = 0; i < jabs.length; i++) {
        if ((jabs[i]["vac"] == "CanSinoBio" || jabs[i]["vac"] == "Sputnik Light" || jabs[i]["vac"] == "Janssen") && jabs[i]["date"] <= Math.floor(Date.now() / 1000) - activate_time * 86400) {
            return {
                "status": "Fully Vaccinated",
                "text": ""
            };
        } else if (["Sputnik V","Oxford-AstraZeneca", "Covishield", "Pfizer-BioNTech", "Moderna", "Novavax(Covovax)", "CoronaVac(Sinovac)", "Sinopharm BIBP", "Sinopharm WIBP", "Covaxin", "Janssen", "Convidecia", "KCONVAC", "BioCubaFarma(Soberana)","Zifivax","Corbevax","Abdala","EpiVacCorona","KoviVac", "QazVac","Tukovac","MVC-COV19","Medicago","COVAX-19","VLA2001","ZyCoV-D","Rasi Cov Pars","FAKHRAVAC","CHO Cell","COVIran Barekat"].includes(jabs[i]["vac"])) {

            for (let j = jabs.length - 1; j > i; j--) {
                //console.log("Here", j, ["CoronaVac(Sinovac)", "Oxford-AstraZeneca", "Pfizer-BioNTech", "Moderna", "Sinopharm BIBP", "Sputnik V", "Covaxin", "Novavax(Covovax)", "Medigen", "Turkovac", "Sputnik Light", "Janssen"].includes(jabs[j]["vac"]),jabs[j]["date"] - jabs[i]["date"] >= min_interval * 604800, jabs[j]["date"] <= Math.floor(Date.now() / 1000) - 1209600, jabs[j]["date"], Math.floor(Date.now() / 1000) - 1209600);
                if (["Sputnik V","Oxford-AstraZeneca", "Covishield", "Pfizer-BioNTech", "Moderna", "Novavax(Covovax)", "CoronaVac(Sinovac)", "Sinopharm BIBP", "Sinopharm WIBP", "Covaxin", "Janssen", "Convidecia", "KCONVAC", "BioCubaFarma(Soberana)","Zifivax","Corbevax","Abdala","EpiVacCorona","KoviVac", "QazVac","Tukovac","MVC-COV19","Medicago","COVAX-19","VLA2001","ZyCoV-D","Rasi Cov Pars","FAKHRAVAC","CHO Cell","COVIran Barekat"].includes(jabs[j]["vac"]) && jabs[j]["date"] <= Math.floor(Date.now() / 1000) - activate_time * 86400) {
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

function LA(jabs, activate_time = 0) {
    for (let i = 0; i < jabs.length; i++) {
        if ((jabs[i]["vac"] == "Sputnik Light" || jabs[i]["vac"] == "Janssen") && jabs[i]["date"] <= Math.floor(Date.now() / 1000) - activate_time * 86400) {
            return {
                "status": "Fully Vaccinated",
                "text": ""
            };
        } else if (["Sputnik Light", "Sputnik V", "Oxford-AstraZeneca", "Covishield", "Pfizer-BioNTech", "Moderna", "Novavax(Covovax)", "CoronaVac(Sinovac)", "Sinopharm BIBP", "Covaxin", "Janssen", "Convidecia"].includes(jabs[i]["vac"])) {

            for (let j = jabs.length - 1; j > i; j--) {
                //console.log("Here", j, ["CoronaVac(Sinovac)", "Oxford-AstraZeneca", "Pfizer-BioNTech", "Moderna", "Sinopharm BIBP", "Sputnik V", "Covaxin", "Novavax(Covovax)", "Medigen", "Turkovac", "Sputnik Light", "Janssen"].includes(jabs[j]["vac"]),jabs[j]["date"] - jabs[i]["date"] >= min_interval * 604800, jabs[j]["date"] <= Math.floor(Date.now() / 1000) - 1209600, jabs[j]["date"], Math.floor(Date.now() / 1000) - 1209600);
                if (["Sputnik Light", "Sputnik V", "Oxford-AstraZeneca", "Covishield", "Pfizer-BioNTech", "Moderna", "Novavax(Covovax)", "CoronaVac(Sinovac)", "Sinopharm BIBP", "Covaxin", "Janssen", "Convidecia"].includes(jabs[j]["vac"]) && jabs[j]["date"] <= Math.floor(Date.now() / 1000) - activate_time * 86400) {
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

function MM(jabs, activate_time = 14) {
    for (let i = 0; i < jabs.length; i++) {
        if ((jabs[i]["vac"] == "Sputnik Light" || jabs[i]["vac"] == "Janssen") && jabs[i]["date"] <= Math.floor(Date.now() / 1000) - activate_time * 86400) {
            return {
                "status": "Fully Vaccinated",
                "text": ""
            };
        } else if (["Sputnik Light", "Sputnik V", "Oxford-AstraZeneca", "Covishield", "Pfizer-BioNTech", "Moderna", "Novavax(Covovax)", "CoronaVac(Sinovac)", "Sinopharm BIBP", "Covaxin", "Janssen", "Myancopharm"].includes(jabs[i]["vac"])) {

            for (let j = jabs.length - 1; j > i; j--) {
                if (["Sputnik Light", "Sputnik V", "Oxford-AstraZeneca", "Covishield", "Pfizer-BioNTech", "Moderna", "Novavax(Covovax)", "CoronaVac(Sinovac)", "Sinopharm BIBP", "Covaxin", "Janssen", "Myancopharm"].includes(jabs[j]["vac"]) && jabs[j]["date"] <= Math.floor(Date.now() / 1000) - activate_time * 86400) {
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

function ID(jabs, activate_time = 14) {
    for (let i = 0; i < jabs.length; i++) {
        if ((jabs[i]["vac"] == "Janssen") && jabs[i]["date"] <= Math.floor(Date.now() / 1000) - activate_time * 86400) {
            return {
                "status": "Fully Vaccinated",
                "text": ""
            };
        } else if (["Sputnik V", "CanSinoBio", "Oxford-AstraZeneca", "Covishield", "Pfizer-BioNTech", "Moderna", "Novavax(Covovax)", "CoronaVac(Sinovac)", "Sinopharm BIBP", "Janssen", "KCONVAC"].includes(jabs[i]["vac"])) {

            for (let j = jabs.length - 1; j > i; j--) {
                if (["Sputnik V", "CanSinoBio", "Oxford-AstraZeneca", "Covishield", "Pfizer-BioNTech", "Moderna", "Novavax(Covovax)", "CoronaVac(Sinovac)", "Sinopharm BIBP", "Janssen", "KCONVAC"].includes(jabs[j]["vac"]) && jabs[j]["date"] <= Math.floor(Date.now() / 1000) - activate_time * 86400) {
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

function KH(jabs, activate_time = 0) {
    for (let i = 0; i < jabs.length; i++) {
        if ((jabs[i]["vac"] == "CanSinoBio" || jabs[i]["vac"] == "Sputnik Light" || jabs[i]["vac"] == "Janssen") && jabs[i]["date"] <= Math.floor(Date.now() / 1000) - activate_time * 86400) {
            return {
                "status": "Fully Vaccinated",
                "text": ""
            };
        } else if (["Sputnik Light", "Sputnik V", "Oxford-AstraZeneca", "Covishield", "Pfizer-BioNTech", "Moderna", "Novavax(Covovax)", "CoronaVac(Sinovac)", "Sinopharm BIBP", "Covaxin", "Janssen", "CanSinoBio", "SANOFI", "Clover Bio-B", "EpiVacCorona", "IMBCAMS", "BioCubaFarma(Soberana)"].includes(jabs[i]["vac"])) {

            for (let j = jabs.length - 1; j > i; j--) {
                if (["Sputnik Light", "Sputnik V", "Oxford-AstraZeneca", "Covishield", "Pfizer-BioNTech", "Moderna", "Novavax(Covovax)", "CoronaVac(Sinovac)", "Sinopharm BIBP", "Covaxin", "Janssen", "CanSinoBio", "SANOFI", "Clover Bio-B", "EpiVacCorona", "IMBCAMS", "BioCubaFarma(Soberana)"].includes(jabs[j]["vac"]) && jabs[j]["date"] <= Math.floor(Date.now() / 1000) - activate_time * 86400) {
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

function MY(jabs, activate_time = 14) {
    for (let i = 0; i < jabs.length; i++) {
        if ((jabs[i]["vac"] == "CanSinoBio" || jabs[i]["vac"] == "Sputnik Light" || jabs[i]["vac"] == "Janssen") && jabs[i]["date"] <= Math.floor(Date.now() / 1000) - activate_time * 86400) {
            return {
                "status": "Fully Vaccinated",
                "text": ""
            };
        }

        if (jabs[i]["vac"] == "CoronaVac(Sinovac)" || jabs[i]["vac"] == "Sinopharm BIBP") {
            if (jabs.length >= 3) {
                if (jabs[2]["date"] <= Math.floor(Date.now() / 1000) - activate_time * 86400) {
                    return {
                        "status": "Fully Vaccinated",
                        "text": ""
                    };
                }
            }
        } else if (["Sputnik Light", "Sputnik V", "Oxford-AstraZeneca", "Covishield", "Pfizer-BioNTech", "Moderna", "Novavax(Covovax)", "Covaxin", "Janssen"].includes(jabs[i]["vac"])) {

            for (let j = jabs.length - 1; j > i; j--) {
                if (["Sputnik Light", "Sputnik V", "Oxford-AstraZeneca", "Covishield", "Pfizer-BioNTech", "Moderna", "Novavax(Covovax)", "Covaxin", "Janssen"].includes(jabs[j]["vac"]) && jabs[j]["date"] <= Math.floor(Date.now() / 1000) - activate_time * 86400) {
                    return {
                        "status": "Fully Vaccinated",
                        "text": ""
                    };
                }
            }
        } else {
            var c = 0;
            for (let j = 0; j < jabs.length; j++) {
                if (jabs[j]["vac"] != "CoronaVac(Sinovac)" && jabs[j]["vac"] != "Sinopharm BIBP" && jabs[j]["date"] <= Math.floor(Date.now() / 1000) - activate_time * 86400) {
                    c++;
                }

            }
            if(c>=2){
                return {
                    "status": "Fully Vaccinated",
                    "text": "Unrecognized Jabs but allowed"
                };
            }
        }
    }

    return {
        "status": "Non-Fully Vaccinated",
        "text": "You need 1-3 jabs"
    };
}

function FR(jabs) {
    for (let i = 0; i < jabs.length; i++) {
        //console.log(jabs[i]["vac"], ["CoronaVac(Sinovac)", "Oxford-AstraZeneca", "Pfizer-BioNTech", "Moderna", "Sinopharm BIBP", "Sputnik V", "Covaxin", "Novavax(Covovax)", "Medigen", "Turkovac", "Sputnik Light", "Janssen"].includes(jabs[i]["vac"]));
        if ((jabs[i]["vac"] == "Janssen") && jabs[i]["date"] <= Math.floor(Date.now() / 1000) - 28 * 86400) {
            return {
                "status": "Fully Vaccinated",
                "text": ""
            };
        }
        else if (["Oxford-AstraZeneca", "Covishield", "Pfizer-BioNTech", "Moderna"].includes(jabs[i]["vac"])) {

            for (let j = jabs.length - 1; j > i; j--) {
                //console.log("Here", j, ["CoronaVac(Sinovac)", "Oxford-AstraZeneca", "Pfizer-BioNTech", "Moderna", "Sinopharm BIBP", "Sputnik V", "Covaxin", "Novavax(Covovax)", "Medigen", "Turkovac", "Sputnik Light", "Janssen"].includes(jabs[j]["vac"]),jabs[j]["date"] - jabs[i]["date"] >= min_interval * 604800, jabs[j]["date"] <= Math.floor(Date.now() / 1000) - 1209600, jabs[j]["date"], Math.floor(Date.now() / 1000) - 1209600);
                if (["Oxford-AstraZeneca", "Covishield", "Pfizer-BioNTech", "Moderna"].includes(jabs[j]["vac"]) && jabs[j]["date"] <= Math.floor(Date.now() / 1000) - 7 * 86400) {
                    return {
                        "status": "Fully Vaccinated",
                        "text": ""
                    };
                }
            }
        }
        else if (["Oxford-AstraZeneca", "Covishield", "Pfizer-BioNTech", "Moderna", "Novavax(Covovax)", "CoronaVac(Sinovac)", "Sinopharm BIBP", "Covaxin", "Janssen", "Convidecia"].includes(jabs[i]["vac"])) {
            for (let j = jabs.length - 2; j > i; j--) {
                if (["Oxford-AstraZeneca", "Covishield", "Pfizer-BioNTech", "Moderna", "Novavax(Covovax)", "CoronaVac(Sinovac)", "Sinopharm BIBP", "Covaxin", "Janssen", "Convidecia"].includes(jabs[j]["vac"])) {
                    for (let k = jabs.length - 1; k > j; k--) {
                        if (["Pfizer-BioNTech", "Moderna"].includes(jabs[k]["vac"]) && jabs[k]["date"] <= Math.floor(Date.now() / 1000) - 7 * 86400) {
                            return {
                                "status": "Fully Vaccinated",
                                "text": ""
                            };
                        }
                    }
                }
            }
        }

    }
    return {
        "status": "Non-Fully Vaccinated",
        "text": "You need 2/1 recognized jabs"
    };

}

function DE(jabs) {
    for (let i = 0; i < jabs.length; i++) {
        //console.log(jabs[i]["vac"], ["CoronaVac(Sinovac)", "Oxford-AstraZeneca", "Pfizer-BioNTech", "Moderna", "Sinopharm BIBP", "Sputnik V", "Covaxin", "Novavax(Covovax)", "Medigen", "Turkovac", "Sputnik Light", "Janssen"].includes(jabs[i]["vac"]));
        if ((jabs[i]["vac"] == "Janssen") && jabs[i]["date"] >= Math.floor(Date.now() / 1000) - 270 * 86400) {
            return {
                "status": "Fully Vaccinated",
                "text": ""
            };
        }
        else if (["Oxford-AstraZeneca", "Covishield", "Pfizer-BioNTech", "Moderna", "Novavax(Covovax)", "CoronaVac(Sinovac)", "Sinopharm BIBP", "Covaxin", "Janssen", "Convidecia"].includes(jabs[i]["vac"])) {
            for (let j = jabs.length - 1; j > i; j--) {
                if (["Oxford-AstraZeneca", "Covishield", "Pfizer-BioNTech", "Moderna", "Novavax(Covovax)", "CoronaVac(Sinovac)", "Sinopharm BIBP", "Covaxin", "Janssen", "Convidecia"].includes(jabs[j]["vac"]) && jabs[j]["date"] >= Math.floor(Date.now() / 1000) - 270 * 86400) {

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

function ES(jabs) {
    for (let i = 0; i < jabs.length; i++) {
        //console.log(jabs[i]["vac"], ["CoronaVac(Sinovac)", "Oxford-AstraZeneca", "Pfizer-BioNTech", "Moderna", "Sinopharm BIBP", "Sputnik V", "Covaxin", "Novavax(Covovax)", "Medigen", "Turkovac", "Sputnik Light", "Janssen"].includes(jabs[i]["vac"]));
        if ((jabs[i]["vac"] == "Janssen") && jabs[i]["date"] >= Math.floor(Date.now() / 1000) - 270 * 86400 && jabs[i]["date"] <= Math.floor(Date.now() / 1000) - 14 * 86400) {
            return {
                "status": "Fully Vaccinated",
                "text": ""
            };
        }
        else if (["Oxford-AstraZeneca", "Covishield", "Pfizer-BioNTech", "Moderna", "Novavax(Covovax)", "CoronaVac(Sinovac)", "Sinopharm BIBP", "Covaxin", "Janssen", "Convidecia"].includes(jabs[i]["vac"])) {
            for (let j = jabs.length - 1; j > i; j--) {
                if (["Oxford-AstraZeneca", "Covishield", "Pfizer-BioNTech", "Moderna", "Novavax(Covovax)", "CoronaVac(Sinovac)", "Sinopharm BIBP", "Covaxin", "Janssen", "Convidecia"].includes(jabs[j]["vac"]) && jabs[j]["date"] >= Math.floor(Date.now() / 1000) - 270 * 86400 && jabs[j]["date"] <= Math.floor(Date.now() / 1000) - 14 * 86400) {

                    return {
                        "status": "Fully Vaccinated",
                        "text": ""
                    };

                }
            }
        }
        else if (["Oxford-AstraZeneca", "Covishield", "Pfizer-BioNTech", "Moderna", "Novavax(Covovax)", "CoronaVac(Sinovac)", "Sinopharm BIBP", "Covaxin", "Janssen", "Convidecia"].includes(jabs[i]["vac"]) == false) {
            for (let j = jabs.length - 1; j > i; j--) {
                if (["Oxford-AstraZeneca", "Covishield", "Pfizer-BioNTech", "Moderna", "Novavax(Covovax)", "CoronaVac(Sinovac)", "Sinopharm BIBP", "Covaxin", "Janssen", "Convidecia"].includes(jabs[j]["vac"]) && jabs[j]["date"] >= Math.floor(Date.now() / 1000) - 270 * 86400 && jabs[j]["date"] <= Math.floor(Date.now() / 1000) - 14 * 86400) {

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

function NL(jabs) {
    for (let i = 0; i < jabs.length; i++) {
        //console.log(jabs[i]["vac"], ["CoronaVac(Sinovac)", "Oxford-AstraZeneca", "Pfizer-BioNTech", "Moderna", "Sinopharm BIBP", "Sputnik V", "Covaxin", "Novavax(Covovax)", "Medigen", "Turkovac", "Sputnik Light", "Janssen"].includes(jabs[i]["vac"]));
        if ((jabs[i]["vac"] == "Janssen") && jabs[i]["date"] >= Math.floor(Date.now() / 1000) - 270 * 86400 && jabs[i]["date"] <= Math.floor(Date.now() / 1000) - 28 * 86400) {
            return {
                "status": "Fully Vaccinated",
                "text": ""
            };
        }
        else if (["Oxford-AstraZeneca", "Covishield", "Pfizer-BioNTech", "Moderna", "Novavax(Covovax)", "CoronaVac(Sinovac)", "Sinopharm BIBP", "Covaxin", "Janssen", "Convidecia"].includes(jabs[i]["vac"])) {
            for (let j = jabs.length - 1; j > i; j--) {
                if (["Oxford-AstraZeneca", "Covishield", "Pfizer-BioNTech", "Moderna", "Novavax(Covovax)", "CoronaVac(Sinovac)", "Sinopharm BIBP", "Covaxin", "Janssen", "Convidecia"].includes(jabs[j]["vac"]) && jabs[j]["date"] >= Math.floor(Date.now() / 1000) - 270 * 86400 && jabs[j]["date"] <= Math.floor(Date.now() / 1000) - 14 * 86400) {

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

function PT(jabs) {
    for (let i = 0; i < jabs.length; i++) {
        //console.log(jabs[i]["vac"], ["CoronaVac(Sinovac)", "Oxford-AstraZeneca", "Pfizer-BioNTech", "Moderna", "Sinopharm BIBP", "Sputnik V", "Covaxin", "Novavax(Covovax)", "Medigen", "Turkovac", "Sputnik Light", "Janssen"].includes(jabs[i]["vac"]));
        if ((jabs[i]["vac"] == "Janssen") && jabs[i]["date"] >= Math.floor(Date.now() / 1000) - 270 * 86400 && jabs[i]["date"] <= Math.floor(Date.now() / 1000) - 14 * 86400) {
            return {
                "status": "Fully Vaccinated",
                "text": ""
            };
        }
        else if (["Oxford-AstraZeneca", "Pfizer-BioNTech", "Moderna", "Novavax(Covovax)", "CoronaVac(Sinovac)", "Sinopharm BIBP", "Covaxin", "Janssen"].includes(jabs[i]["vac"])) {
            for (let j = jabs.length - 1; j > i; j--) {
                if (["Oxford-AstraZeneca", "Pfizer-BioNTech", "Moderna", "Novavax(Covovax)", "CoronaVac(Sinovac)", "Sinopharm BIBP", "Covaxin", "Janssen"].includes(jabs[j]["vac"]) && jabs[j]["date"] >= Math.floor(Date.now() / 1000) - 270 * 86400 && jabs[j]["date"] <= Math.floor(Date.now() / 1000) - 14 * 86400) {

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

function FI(jabs) {
    for (let i = 0; i < jabs.length; i++) {
        //console.log(jabs[i]["vac"], ["CoronaVac(Sinovac)", "Oxford-AstraZeneca", "Pfizer-BioNTech", "Moderna", "Sinopharm BIBP", "Sputnik V", "Covaxin", "Novavax(Covovax)", "Medigen", "Turkovac", "Sputnik Light", "Janssen"].includes(jabs[i]["vac"]));
        if ((jabs[i]["vac"] == "Janssen") && jabs[i]["date"] <= Math.floor(Date.now() / 1000) - 7 * 86400) {
            return {
                "status": "Fully Vaccinated",
                "text": ""
            };
        }
        else if (["Oxford-AstraZeneca", "Covishield", "Pfizer-BioNTech", "Moderna", "CoronaVac(Sinovac)", "Sinopharm BIBP", "Covaxin", "Janssen"].includes(jabs[i]["vac"])) {
            for (let j = jabs.length - 1; j > i; j--) {
                if (["Oxford-AstraZeneca", "Covishield", "Pfizer-BioNTech", "Moderna", "CoronaVac(Sinovac)", "Sinopharm BIBP", "Covaxin", "Janssen"].includes(jabs[j]["vac"]) && jabs[j]["date"] <= Math.floor(Date.now() / 1000) - 7 * 86400) {

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

function EE(jabs) {
    for (let i = 0; i < jabs.length; i++) {
        //console.log(jabs[i]["vac"], ["CoronaVac(Sinovac)", "Oxford-AstraZeneca", "Pfizer-BioNTech", "Moderna", "Sinopharm BIBP", "Sputnik V", "Covaxin", "Novavax(Covovax)", "Medigen", "Turkovac", "Sputnik Light", "Janssen"].includes(jabs[i]["vac"]));
        if ((jabs[i]["vac"] == "Janssen") && jabs[i]["date"] >= Math.floor(Date.now() / 1000) - 270 * 86400) {
            return {
                "status": "Fully Vaccinated",
                "text": ""
            };
        }
    }
    if (jabs.length >= 3 && jabs[jabs.length - 1]["date"] >= Math.floor(Date.now() / 1000) - 12 * 30 * 86400) {
        return {
            "status": "Fully Vaccinated",
            "text": ""
        };
    } else if (jabs.length == 2 && jabs[jabs.length - 1]["date"] >= Math.floor(Date.now() / 1000) - 270 * 86400) {
        return {
            "status": "Fully Vaccinated",
            "text": ""
        };
    }
    return {
        "status": "Non-Fully Vaccinated",
        "text": "You need 2/1 recognized jabs"
    };

}

function IN(jabs) {
    for (let i = 0; i < jabs.length; i++) {
        //console.log(jabs[i]["vac"], ["CoronaVac(Sinovac)", "Oxford-AstraZeneca", "Pfizer-BioNTech", "Moderna", "Sinopharm BIBP", "Sputnik V", "Covaxin", "Novavax(Covovax)", "Medigen", "Turkovac", "Sputnik Light", "Janssen"].includes(jabs[i]["vac"]));
        if ((jabs[i]["vac"] == "Janssen")) {
            return {
                "status": "Fully Vaccinated",
                "text": ""
            };
        }
        else if (["Oxford-AstraZeneca", "Covishield", "Pfizer-BioNTech", "Moderna", "Novavax(Covovax)", "CoronaVac(Sinovac)", "Sinopharm BIBP", "Covaxin", "Convidecia"].includes(jabs[i]["vac"])) {
            for (let j = jabs.length - 1; j > i; j--) {
                if (["Oxford-AstraZeneca", "Covishield", "Pfizer-BioNTech", "Moderna", "Novavax(Covovax)", "CoronaVac(Sinovac)", "Sinopharm BIBP", "Covaxin", "Convidecia"].includes(jabs[j]["vac"])) {
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
        "text": "You need 2/1 WHO-recognized jabs"
    };

}


function BR(jabs) {
    for (let i = 0; i < jabs.length; i++) {
        //console.log(jabs[i]["vac"], ["CoronaVac(Sinovac)", "Oxford-AstraZeneca", "Pfizer-BioNTech", "Moderna", "Sinopharm BIBP", "Sputnik V", "Covaxin", "Novavax(Covovax)", "Medigen", "Turkovac", "Sputnik Light", "Janssen"].includes(jabs[i]["vac"]));
        if ((jabs[i]["vac"] == "Janssen" && jabs[i]["date"] <= Math.floor(Date.now() / 1000) - 14 * 86400)) {
            return {
                "status": "Fully Vaccinated",
                "text": ""
            };
        }
        else if (["Oxford-AstraZeneca", "Covishield", "Pfizer-BioNTech", "Moderna", "Novavax(Covovax)", "CoronaVac(Sinovac)", "Sinopharm BIBP", "Covaxin", "Convidecia"].includes(jabs[i]["vac"])) {
            for (let j = jabs.length - 1; j > i; j--) {
                if (["Oxford-AstraZeneca", "Covishield", "Pfizer-BioNTech", "Moderna", "Novavax(Covovax)", "CoronaVac(Sinovac)", "Sinopharm BIBP", "Covaxin", "Convidecia"].includes(jabs[j]["vac"]) && jabs[j]["date"] <= Math.floor(Date.now() / 1000) - 14 * 86400) {
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
        "text": "You need 2/1 WHO-recognized jabs"
    };

}
//console.log(TH(jabs));