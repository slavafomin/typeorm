import {TargetMetadata} from "./TargetMetadata";

/**
 * This metadata interface contains all information about naming strategy.
 */
export class NamingStrategyMetadata extends TargetMetadata {

    // ---------------------------------------------------------------------
    // Readonly Properties
    // ---------------------------------------------------------------------

    /**
     * Naming strategy name.
     */
    readonly name: string;

    // ---------------------------------------------------------------------
    // Constructor
    // ---------------------------------------------------------------------

    constructor(target: Function, name: string) {
        super(target);
        this.name = name;
    }

}