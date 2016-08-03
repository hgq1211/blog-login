/**
 * Created by Administrator on 2016/8/3.
 */
module Validation {
    export interface StringValidator {
        isAcceptable(s: string): boolean;
    }
}