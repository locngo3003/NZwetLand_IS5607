/**
 * @name getSingleSurvey
 * @param surveyID
 * @returns survey obj
 */
function getSingleSurvey(surveyID){

    $.ajax({
        type: 'Get',
        dataType: 'JSON',
        async:false,
        url: 'https://nzwetland.herokuapp.com/api/Survey/'+surveyID+'/',
        success: function (data) {
            // location.reload();
            survey1 = data;

        },
        error: function (err) {
            console.log(err);
        }

    });
    return survey1;
}
function getSingleSiteHabitat(siteHabitatID){
    //return case object
    $.ajax({
        type: 'Get',
        dataType: 'JSON',
        async:false,
        url: 'https://nzwetland.herokuapp.com/api/Sitehabitat/'+siteHabitatID+'/',
        success: function (data) {
            // location.reload();
            siteHabitat1 = data;

        },
        error: function (err) {
            console.log(err);
        }

    });
    return siteHabitat1;
}
function getSingleSite(siteID){
    //return case object
    $.ajax({
        type: 'Get',
        dataType: 'JSON',
        async:false,
        url: 'https://nzwetland.herokuapp.com/api/site/'+siteID+'/',
        success: function (data) {
            // location.reload();
            site1 = data;

        },
        error: function (err) {
            console.log(err);
        }

    });
    return site1;
}
function getSingleanimal(animalID){
    //return case object
    $.ajax({
        type: 'Get',
        dataType: 'JSON',
        async:false,
        url: 'https://nzwetland.herokuapp.com/api/Animal/'+animalID+'/',
        success: function (data) {
            // location.reload();
            animal1 = data;

        },
        error: function (err) {
            console.log(err);
        }

    });
    return animal1;
}
function recordedObservation(siteHabitat){
    //return assessment objects
    recordedObservations = [];
    $.ajax({
        type: 'Get',
        dataType: 'JSON',
        async:false,
        url: 'https://nzwetland.herokuapp.com/api/Observation/',
        success: function (data) {
            // location.reload();
            i = 0;
            while (i<data.length){
                obsevation = data[i];
                if (obsevation.sitehabitat == siteHabitat){
                    recordedObservations.push(obsevation);
                }
                i=i+1;
            }

        },
        error: function (err) {
            console.log(err);
        }

    });
    return recordedObservations;
}