import AWS from 'aws-sdk';

var bucket = "artgalleryszili.digital";

AWS.config.region = 'eu-central-1'; // Region
AWS.config.credentials = new AWS.CognitoIdentityCredentials({
    IdentityPoolId: 'eu-central-1:562d3a66-0ec5-4c4c-89d5-cfb61508b116',
});

var s3 = new AWS.S3({
    apiVersion: '2006-03-01',
    params: {Bucket: bucket}
})

function getHTML(template){
    return template.join('\n');
}

// export function listAlbums(){
//     s3.listObjects({Delimiter: '/'}, (err, data) => {
//         if(err){
//           console.log("ERROR\n", err);
//         }
//         else{
//             var albums = data.CommonPrefixes.map(function(commonPrefix) {
//                 var prefix = commonPrefix.Prefix;
//                 var albumName = decodeURIComponent(prefix.replace('/', ''));
//                 return getHTML([
//                   '<li>',
//                     '<button style="margin:5px;" onclick="ViewAlbum(\'' + albumName + '\')">',
//                       albumName,
//                     '</button>',
//                   '</li>'
//                 ]);
//             });
//               var message = albums.length ?
//                 getHTML([
//                   '<p>Click on an album name to view it.</p>',
//                 ]) :
//                 '<p>You do not have any albums. Please Create album.';
//               var htmlTemplate = [
//                 '<h2>Albums</h2>',
//                 message,
//                 '<ul>',
//                     getHTML(albums),
//                 '</ul>',
//               ]
//               document.getElementById('viewer').innerHTML = getHTML(htmlTemplate);
//             }
//     })
// }

// export function TestExport(){
//   console.log("click")
// }

export async function GetPhotoesUrl() {
  var photoUrls = [];
  await s3.listObjects({}, function(err, data) {
    if (err) {
      console.log('There was an error viewing your album: ' + err.message);
      return;
    }
    // 'this' references the AWS.Request instance that represents the response
    var href = this.request.httpRequest.endpoint.href;
    var bucketUrl = href + bucket + '/';
    data.Contents.forEach((photo) => {
      var photoKey = photo.Key;
      photoUrls.push(bucketUrl + encodeURIComponent(photoKey));
    });
  }).promise();
  return photoUrls;
}

export async function GetPhotoesUrlAsync() {
  var photoUrls = [];
  try{
    var data = await s3.listObjects().promise(); 
    console.log(data.request);
    var href = this.request.httpRequest.endpoint.href;
    var bucketUrl = href + bucket + '/';
    data.Contents.forEach((photo) => {
      var photoKey = photo.Key;
      photoUrls.push(bucketUrl + encodeURIComponent(photoKey));
    });
    return photoUrls
  }
  catch(err){
    console.log(err);
  }
}