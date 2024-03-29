---
sidebar_position: 1
---

# Arduino CLI

Arduino CLI is a command line tool for compiling and uploading Arduino sketches. It is a wrapper around the Arduino IDE and provides a faster and more flexible alternative to the Arduino IDE.

## Usage

Check board list:

```bash
arduino-cli core update-index
arduino-cli board list
```

Install core:

```bash
arduino-cli core install arduino:avr
```

Compile sketch:

```bash
arduino-cli compile --fqbn arduino:avr:uno /path/to/sketch
```

Upload sketch:

```bash
arduino-cli upload -p /dev/ttyACM0 --fqbn arduino:avr:uno /path/to/sketch
```

**Note**: Ensure your user has access to `/dev/ttyACM0` or whichever port your Arduino is connected to.

If not, you can do the following:

```bash
sudo chmod a+rw /dev/ttyACM0
```

Add libraries:

```bash
arduino-cli lib search Servo
# Pick the right name from the list
arduino-cli lib install "Servo"
```

