var dhcp = require('dhcp');

var s = dhcp.createBroadcastHandler();

s.on('message', function (data) {

  let value = '12'
  console.log(data);
  if (data.options[53] === dhcp.DHCPDISCOVER) {
    if (data.chaddr === '94-65-2D-04-51-7B') {
      console.log('Welcome home!, Hrithik');
    }
  }
});

s.listen();