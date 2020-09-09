const dhcp = require('dhcp');
const say = require('say');

const s = dhcp.createBroadcastHandler();

s.on('message', function (data) {
  console.log(data);
  if (data.options[53] === dhcp.DHCPDISCOVER) {
    if (data.chaddr === '94-65-2D-04-51-7B') {
        say.speak('Welcome home!, Hrithik');
    }
  }
});

s.listen();