
enum btnList{
    //% block="M-LEFT"
    cleft = 8,
    //% block="M-RIGHT"
    cright = 16,
    //% block="R-TOP"
    rup = 12,
    //% block="R-BOTTOM"
    rdown = 14,
    //% block="R-LEFT"
    rleft = 13,
    //% block="R-RIGHT"
    rright = 15
}

enum ToneHzTable {
    do = 262,
    re = 294,
    mi = 330,
    fa = 349,
    sol = 392,
    la = 440,
    si = 494
}

enum BeatList {
    //% block="1"
    whole_beat = 10,
    //% block="1/2"
    half_beat = 11,
    //% block="1/4"
    quarter_beat = 12,
    //% block="1/8"
    eighth_beat = 13,
    //% block="2"
    double_beat = 14,
    //% block="4"
    breve_beat = 15
}

enum eventList {
    //% block="PRESSED"
    pressed = 1,
    //% block="RELEASED"
    released = 0
}

//% weight=99 icon="\uf0e7" color=#1B80C4
namespace JoyBit {
    /**
     * 摇杆横轴
     */
    //% blockId="joy_x" block="Joystick X value"
    //% weight=100
    export function rockerX(): number {

        return pins.analogReadPin(AnalogPin.P2);

    }

    /**
     * 摇杆纵轴
     */
    //% blockId="joy_y" block="Joystick Y value"
    //% weight=99
    export function rockerY(): number {
        
        return pins.analogReadPin(AnalogPin.P1);
        
    }

    /**
     * 播放音调
     */
    //% weight=89
    //% blockId="joy_tone" block="Play Tone %tone| for %beatInfo"
    export function myPlayTone(tone:ToneHzTable, beatInfo:BeatList): void {

        if(beatInfo == BeatList.whole_beat){
            music.playTone(tone, music.beat(BeatFraction.Whole));

        }
       
        if(beatInfo == BeatList.half_beat){
            music.playTone(tone, music.beat(BeatFraction.Half));

        }
        
        if(beatInfo == BeatList.quarter_beat){
            music.playTone(tone, music.beat(BeatFraction.Quarter));

        }

        if(beatInfo == BeatList.double_beat){
            music.playTone(tone, music.beat(BeatFraction.Double));

        }

        
        if(beatInfo == BeatList.eighth_beat){
            music.playTone(tone, music.beat(BeatFraction.Eighth));

        }

        if(beatInfo == BeatList.breve_beat){
            music.playTone(tone, music.beat(BeatFraction.Breve));

        }
        //1、16不行
        // if(beatInfo == BeatList.sixteen_beat){
        //     music.playTone(tone, music.beat(BeatFraction.SixTeenth));

        // }    
    }

    //% weight=79
    //% blockId="joy_btn_pressed" block="Button %btn|  %btnEvent"
    export function btnPressed(btn:btnList, btnEvent:eventList): boolean {

        if(btn == btnList.cleft){
            return pins.digitalReadPin(DigitalPin.P8) == btnEvent;
        }else if(btn == btnList.cright){
            return pins.digitalReadPin(DigitalPin.P16) == btnEvent;
        }else if(btn == btnList.rup){
            return pins.digitalReadPin(DigitalPin.P12) == btnEvent;
        }else if(btn == btnList.rdown){
            return pins.digitalReadPin(DigitalPin.P14) == btnEvent;
        }else if(btn == btnList.rleft){
            return pins.digitalReadPin(DigitalPin.P13) == btnEvent;
        }else{
            return pins.digitalReadPin(DigitalPin.P15) == btnEvent;
        }
        
    }

}


