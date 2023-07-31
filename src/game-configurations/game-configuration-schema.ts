import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class MiniGameConfiguration {
  @Prop({ type: Boolean, default: false })
  miniPanel: boolean;
}

@Schema()
export class BundleConfiguration {
  @Prop({ type: [String], default: [] })
  dependsOn: string[];
}

@Schema()
export class BannerConfiguration {
  @Prop()
  displayTime: number;

  @Prop()
  order: number;
}

@Schema()
export class GameConfiguration {
  @Prop()
  id: number;

  @Prop()
  currencyGroupId?: string;

  @Prop()
  name: string;

  @Prop()
  key: string;

  @Prop()
  route?: string;

  @Prop()
  tag?: string;

  @Prop()
  order?: number;

  @Prop()
  bigSize?: boolean;

  @Prop({ type: MiniGameConfiguration, default: null })
  mini?: MiniGameConfiguration;

  @Prop({ type: BundleConfiguration, default: null })
  remoteBundle?: BundleConfiguration;

  @Prop({ type: BannerConfiguration, default: null })
  banner?: BannerConfiguration;

  category?: string;

  @Prop()
  isMicrosite?: boolean;
}

export const GameConfigurationSchema =
  SchemaFactory.createForClass(GameConfiguration);
