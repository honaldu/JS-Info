const styles = ["Jazz", "Blues"];
styles.push("Rock-n-Roll");
styles[styles.length % 2] = "Classics";
styles.shift();
styles.unshift("Rap", "Reggae");
alert(styles);
